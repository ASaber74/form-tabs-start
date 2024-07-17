import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNavComponent } from './form-nav/form-nav.component';
import { LanguageFormComponent } from './main-form/language-form/language-form.component';
@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FormNavComponent,
    LanguageFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
