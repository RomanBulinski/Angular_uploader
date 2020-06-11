import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {UploaderComponent} from './dialogs/uploader/uploader.component';
import {MatButtonModule, MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {EmptyComponent} from './empty/empty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    UploaderComponent,
    EmptyComponent
  ],
  entryComponents: [
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
