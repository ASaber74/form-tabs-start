import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-communication-nav',
  templateUrl: './communication-nav.component.html',
  styleUrls: ['./communication-nav.component.scss'],
})
export class CommunicationNavComponent {
  @Input() communicationSettings!: FormGroup;
}
