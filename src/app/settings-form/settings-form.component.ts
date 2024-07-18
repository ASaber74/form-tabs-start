import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LANGUAGES } from 'src/languages';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
})
export class SettingsFormComponent {
  settingsForm: FormGroup;
  authGroup: FormGroup;
  communicationSettings: FormGroup;
  languages: string[] = LANGUAGES;

  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      languageGroup: this._languageFormGroup(),
      authGroup: this.fb.group({
        basicAuth: this._basicAuthGroup(),
        ldapAuth: this._ldapAuth(),
      }),
      communicationSettings: this.fb.group({
        mailCommunication: this._mailCommunication(),
        smsCommunication: this._smsCommunication(),
      }),
    });

    this.authGroup = this.settingsForm.get('authGroup') as FormGroup;
    this.communicationSettings = this.settingsForm.get(
      'communicationSettings'
    ) as FormGroup;
  }

  private _languageFormGroup(): FormGroup {
    return this.fb.group({
      availableLanguages: [this.languages[0]],
      primaryLanguage: 'English',
      secondaryLanguage: 'Arabic',
    });
  }

  private _basicAuthGroup(): FormGroup {
    return this.fb.group({
      blockAfterFailedAttempts: [3, Validators.required],
      passwordMinLength: [8, Validators.required],
      passwordMaxLength: [20, Validators.required],
      passwordExpiresAfter: [90, Validators.required],
      shouldContainDigits: [true],
      shouldContainCharacters: [true],
      shouldContainSpecialCharacters: [false],
      preventWhiteSpace: [true],
      preventKeyboardSequence: [true],
      preventLoginID: [true],
      preventUserName: [true],
      preventEmail: [true],
      validateSequence: [true],
      validateRepeatedCharacter: [true],
      acceptRepeatingPasswordAfter: [5, Validators.required],
      preventSequenceWithLengthOf: [3],
      preventRepeatedSequenceWithLengthOf: [3, Validators.required],
    });
  }

  private _ldapAuth(): FormGroup {
    return this.fb.group({
      enableLdap: [false],
      host: [{ value: '', disabled: true }, Validators.required],
      port: [{ value: '', disabled: true }, Validators.required],
      base: [{ value: '', disabled: true }, Validators.required],
      username: [{ value: '', disabled: true }, Validators.required],
      password: [{ value: '', disabled: true }, Validators.required],
    });
  }

  private _mailCommunication(): FormGroup {
    return this.fb.group({
      serverType: ['Standard', Validators.required],
      smtpServer: [
        { value: 'smtp.emailsrvr.com', disabled: true },
        Validators.required,
      ],
      outgoingPort: [
        { value: '587', disabled: true },
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      username: [
        { value: 'noreply@kn-it.com', disabled: true },
        Validators.required,
      ],
      password: [{ value: 'P@ssw0rd', disabled: true }, Validators.required],
    });
  }

  private _smsCommunication(): FormGroup {
    return this.fb.group({
      smsType: ['Standard', Validators.required],
      npi: [123, Validators.required],
      ton: ['SMSTON', Validators.required],
      sourceAddress: ['SourceAddress', Validators.required],
      hostIp: ['192.168.3.114', Validators.required],
      smsPort: ['900', Validators.required],
      smsUsername: ['Ahmed', Validators.required],
      smsPassword: ['P@ssw0rd', Validators.required],
    });
  }

  handleSave(settingsForm: FormGroup) {
    console.log(settingsForm.value);
  }
}
