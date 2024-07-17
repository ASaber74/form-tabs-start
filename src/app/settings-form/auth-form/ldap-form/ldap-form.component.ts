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
  selector: 'app-ldap-form',
  templateUrl: './ldap-form.component.html',
  styleUrls: ['./ldap-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LdapFormComponent),
      multi: true,
    },
  ],
})
export class LdapFormComponent implements ControlValueAccessor, OnDestroy {
  ldapAuthGroup: FormGroup;
  onChangeSub!: Subscription;
  onTouched = () => {};

  constructor(private fb: FormBuilder) {
    this.ldapAuthGroup = this.fb.group({
      enableLdap: [false],
      host: [{ value: '', disabled: true }, Validators.required],
      port: [{ value: '', disabled: true }, Validators.required],
      base: [{ value: '', disabled: true }, Validators.required],
      username: [{ value: '', disabled: true }, Validators.required],
      password: [{ value: '', disabled: true }, Validators.required],
    });
    this.onEnableLdapChange();
  }

  onEnableLdapChange() {
    this.ldapAuthGroup
      .get('enableLdap')
      ?.valueChanges.subscribe((checked: boolean) => {
        if (checked) {
          this.ldapAuthGroup.get('host')?.enable();
          this.ldapAuthGroup.get('port')?.enable();
          this.ldapAuthGroup.get('base')?.enable();
          this.ldapAuthGroup.get('username')?.enable();
          this.ldapAuthGroup.get('password')?.enable();
        } else {
          this.ldapAuthGroup.get('host')?.disable();
          this.ldapAuthGroup.get('port')?.disable();
          this.ldapAuthGroup.get('base')?.disable();
          this.ldapAuthGroup.get('username')?.disable();
          this.ldapAuthGroup.get('password')?.disable();
        }
      });
  }

  writeValue(value: any): void {
    if (value) {
      this.ldapAuthGroup.setValue(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.ldapAuthGroup.valueChanges.subscribe(onChange);
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.ldapAuthGroup.disable();
    } else {
      this.ldapAuthGroup.enable();
    }
  }
}
