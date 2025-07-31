import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AppStoreService } from 'src/app/store/services/app.store.service';

@Component({
    selector: 'app-services-page',
    imports: [TranslateModule],
    templateUrl: './services-page.component.html',
    styleUrl: './services-page.component.css'
})
export class ServicesPageComponent {
    constructor(private appStoreService: AppStoreService) {}

    // This method simulates a service call to create a new blockchain
    // and sets the loading state to true while the operation is in progress.
    // In a real application, you would replace the setTimeout with an actual service call.
    createBlockchain() {
        this.appStoreService.setIsLoading(true);
        setTimeout(() => {
            this.appStoreService.setIsLoading(false);
        }, 2000);
    }
}
