import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastNotificationSignalService {
    triggerStatus = signal(false);

    triggerToastNotification() {
        this.triggerStatus.set(true);
    }

    resetToastNotification() {
        this.triggerStatus.set(false);
    }
}
