import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LANGUAGES } from 'src/languages';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent {
  mainForm: FormGroup;
  languages: string[] = LANGUAGES;

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      languageGroup: this._languageFormGroup(),
    });
  }

  private _languageFormGroup(): FormGroup {
    return this.fb.group({
      availableLanguages: [this.languages[0]],
      primaryLanguage: 'English',
      secondaryLanguage: 'Arabic',
    });
  }

  handleSave(mainForm: FormGroup) {
    console.log(mainForm.value);
  }

  get languageGroup(): FormGroup {
    return this.mainForm.get('languageGroup') as FormGroup;
  }
}
