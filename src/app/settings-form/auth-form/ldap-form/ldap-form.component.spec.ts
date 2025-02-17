import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapFormComponent } from './ldap-form.component';

describe('LdapFormComponent', () => {
  let component: LdapFormComponent;
  let fixture: ComponentFixture<LdapFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LdapFormComponent]
    });
    fixture = TestBed.createComponent(LdapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
