import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthNavComponent } from './main-nav/auth-nav/auth-nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { LanguageFormComponent } from './settings-form/language-form/language-form.component';
import { BasicFormComponent } from './settings-form/auth-form/basic-form/basic-form.component';
import { LdapFormComponent } from './settings-form/auth-form/ldap-form/ldap-form.component';
import { CommunicationNavComponent } from './main-nav/communication-nav/communication-nav.component';
import { MailFormComponent } from './settings-form/communication-form/mail-form/mail-form.component';
import { SmsFormComponent } from './settings-form/communication-form/sms-form/sms-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsFormComponent,
    MainNavComponent,
    LanguageFormComponent,
    AuthNavComponent,
    BasicFormComponent,
    LdapFormComponent,
    CommunicationNavComponent,
    MailFormComponent,
    SmsFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
