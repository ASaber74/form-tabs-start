import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
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
  @Input() parentForm!: FormGroup;
  languages: string[] = LANGUAGES;

  constructor(private fb: FormBuilder) {}

  writeValue(value: any): void {
    if (value) {
      this.parentForm.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.parentForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    // Handle the touched state
  }
  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.parentForm.disable();
    } else {
      this.parentForm.enable();
    }
  }
}
