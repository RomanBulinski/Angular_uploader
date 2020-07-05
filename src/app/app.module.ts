import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatNativeDateModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {EmptyComponent} from './empty/empty.component';
import {AngularFileUploaderModule} from 'angular-file-uploader';
import {ProposalServiceService} from './dialogs/services/proposal-service.service';
import {SmsConfirmationComponent} from './dialogs/smsConfirmation/smsConfirmation.component';
import {ProperUploaderComponent} from './dialogs/proper-uploader/proper-uploader.component';
import {UploaderCoreComponent} from './commons/uploader-core/uploader-core.component';
import {SaverComponent} from './commons/saver/saver.component';

// import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    EmptyComponent,
    SmsConfirmationComponent,
    ProperUploaderComponent,
    UploaderCoreComponent,
    SaverComponent
  ],
  entryComponents: [
    SmsConfirmationComponent,
    ProperUploaderComponent,
    SaverComponent
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
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
    // FlexLayoutModule
  ],
  providers: [ProposalServiceService,
    MatDatepickerModule,],
  bootstrap: [AppComponent]
})
export class AppModule {
}
