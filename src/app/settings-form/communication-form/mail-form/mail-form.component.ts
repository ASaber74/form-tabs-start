import { Component, forwardRef, OnDestroy } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MailFormComponent),
      multi: true,
    },
  ],
})
export class MailFormComponent implements ControlValueAccessor, OnDestroy {
  mailCommunication: FormGroup;
  onChangeSub!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {
    this.mailCommunication = this.fb.group({
      serverType: ['Standard', Validators.required],
      smtpServer: [
        { value: 'smtp.emailsrvr.com', disabled: true },
        Validators.required,
      ],
      outgoingPort: [
        { value: '587', disabled: true },
        [Validators.required, Validators.pattern('^[0-9]+$')],
      ],
      serverUsername: [
        { value: 'noreply@kn-it.com', disabled: true },
        Validators.required,
      ],
      serverPassword: [{ value: 'P@ssw0rd', disabled: true }, Validators.required],
    });
  }
  writeValue(value: any): void {
    if (value) {
      this.mailCommunication.setValue(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.mailCommunication.valueChanges.subscribe(onChange);
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.mailCommunication.disable();
    } else {
      this.mailCommunication.enable();
    }
  }
}
