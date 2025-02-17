import { Component, forwardRef, Input, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';
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
export class LanguageFormComponent implements ControlValueAccessor, OnDestroy {
  @Input() formGroupName!: string;
  languageForm: FormGroup;
  languages: string[] = LANGUAGES;
  onChangeSub!: Subscription;
  onTouched = () => {};
  onChange = (_: any) => {};

  constructor(private fb: FormBuilder) {
    this.languageForm = this.fb.group({
      availableLanguages: [this.languages[0]],
      primaryLanguage: 'English',
      secondaryLanguage: 'Arabic',
    });
  }

  writeValue(value: any): void {
    if (value) {
      this.languageForm.setValue(value);
    }
  }

  registerOnChange(onChange: any) {
    this.onChangeSub = this.languageForm.valueChanges.subscribe((value) =>
      onChange(value)
    );
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.languageForm.disable();
    } else {
      this.languageForm.enable();
    }
  }
}
