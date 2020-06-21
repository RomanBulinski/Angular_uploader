import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {UploaderComponent} from './dialogs/uploader/uploader.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {EmptyComponent} from './empty/empty.component';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {AngularUploaderComponent} from './dialogs/angular-uploader/angular-uploader.component';
import {ProposalServiceService} from './dialogs/services/proposal-service.service';
import {SmsConfirmationComponent} from './dialogs/smsConfirmation/smsConfirmation.component';
import {ProperUploaderComponent} from './dialogs/proper-uploader/proper-uploader.component';
import {UploaderCoreComponent} from './commons/uploader-core/uploader-core.component';
// import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    UploaderComponent,
    EmptyComponent,
    AngularUploaderComponent,
    SmsConfirmationComponent,
    ProperUploaderComponent,
    UploaderCoreComponent
  ],
  entryComponents: [
    UploaderComponent,
    AngularUploaderComponent,
    SmsConfirmationComponent,
    ProperUploaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatDialogModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        ReactiveFormsModule,
        AngularFileUploaderModule,
        // FlexLayoutModule
    ],
  providers: [ProposalServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
