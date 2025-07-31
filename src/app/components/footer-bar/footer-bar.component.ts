import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-footer-bar',
    imports: [TranslateModule],
    templateUrl: './footer-bar.component.html',
    styleUrl: './footer-bar.component.css'
})
export class FooterBarComponent {
    currentYear: number = new Date().getFullYear();
}
