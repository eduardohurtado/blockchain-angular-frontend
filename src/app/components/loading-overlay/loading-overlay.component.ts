import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-loading-overlay',
    imports: [CommonModule, TranslateModule],
    templateUrl: './loading-overlay.component.html',
    styleUrl: './loading-overlay.component.css'
})
export class LoadingOverlayComponent {
    @Input() isLoading = false;
}
