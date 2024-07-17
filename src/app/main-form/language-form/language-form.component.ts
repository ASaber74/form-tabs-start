import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LANGUAGES } from 'src/languages';

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LanguageFormComponent),
      multi: true,
    },
  ],
})
export class LanguageFormComponent implements ControlValueAccessor {
  form: FormGroup;
  languages: string[] = LANGUAGES;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      availableLanguages: [this.languages[0]],
      primaryLanguage: 'English',
      secondaryLanguage: 'Arabic',
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    // Handle the touched state
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
