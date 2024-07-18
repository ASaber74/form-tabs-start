import { Component, forwardRef, OnChanges, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MailFormComponent } from '../mail-form/mail-form.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sms-form',
  templateUrl: './sms-form.component.html',
  styleUrls: ['./sms-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SmsFormComponent),
      multi: true,
    },
  ],
})
export class SmsFormComponent implements ControlValueAccessor, OnDestroy {
  smsCommunication: FormGroup;
  onChangeSub!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {
    this.smsCommunication = this.fb.group({
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

  writeValue(value: any): void {
    if (value) {
      this.smsCommunication.setValue(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.smsCommunication.valueChanges.subscribe(onChange);
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.smsCommunication.disable();
    } else {
      this.smsCommunication.enable();
    }
  }
}
