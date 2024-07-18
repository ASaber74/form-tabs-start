import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicFormComponent),
      multi: true,
    },
  ],
})
export class BasicFormComponent implements ControlValueAccessor, OnDestroy {
  basicAuthGroup: FormGroup;
  onChangeSub!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {
    this.basicAuthGroup = this.fb.group({
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

  writeValue(value: any): void {
    if (value) {
      this.basicAuthGroup.setValue(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.basicAuthGroup.valueChanges.subscribe(onChange);
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.basicAuthGroup.disable();
    } else {
      this.basicAuthGroup.enable();
    }
  }
}
