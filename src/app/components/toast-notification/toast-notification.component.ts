import { CommonModule } from '@angular/common';
import { Component, effect, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ToastNotificationSignalService } from 'src/app/services/toast-notification.signal.service';

@Component({
    selector: 'app-toast-notification',
    imports: [CommonModule, TranslateModule],
    templateUrl: './toast-notification.component.html',
    styleUrl: './toast-notification.component.css'
})
export class ToastNotificationComponent implements OnInit, OnDestroy {
    @Input() showToast: boolean = false;
    @Input() toastMessage: string = '';

    hideToast = false;
    removedToast = false;
    timeouts: number[] = [];
    destroyEffects: (() => void)[] = [];

    constructor(private toastNotificationSignalService: ToastNotificationSignalService) {
        this.setupEffects();
    }

    ngOnInit(): void {
        this.hideToast = true;
        this.removedToast = true;
    }

    setupEffects() {
        const toastEffect = effect(() => {
            if (this.toastNotificationSignalService.triggerStatus()) {
                this.showToastNotification();
            }
        });

        this.destroyEffects.push(() => toastEffect.destroy());
    }

    showToastNotification() {
        this.hideToast = false;
        this.removedToast = false;
        this.animateHideToastNotification();
    }

    animateHideToastNotification() {
        const id1 = window.setTimeout(() => {
            this.hideToast = true;
        }, 3000);

        const id2 = window.setTimeout(() => {
            this.closeToastNotification();
        }, 3300); // Match the duration of the opacity transition

        this.timeouts.push(id1, id2);
    }

    closeToastNotification() {
        this.removedToast = true;
        this.toastNotificationSignalService.resetToastNotification();
        this.clearAllTimeouts();
    }

    clearAllTimeouts() {
        this.timeouts.forEach((id) => clearTimeout(id));
        this.timeouts = []; // Optional: clean up the list
    }

    ngOnDestroy(): void {
        this.clearAllTimeouts();
        this.destroyEffects.forEach((destroy) => destroy());
    }
}
