import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-nav',
  templateUrl: './form-nav.component.html',
  styleUrls: ['./form-nav.component.scss'],
})
export class FormNavComponent {
  @Input() parentForm!: FormGroup;
}
