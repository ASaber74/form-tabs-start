import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationNavComponent } from './communication-nav.component';

describe('CommunicationNavComponent', () => {
  let component: CommunicationNavComponent;
  let fixture: ComponentFixture<CommunicationNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicationNavComponent]
    });
    fixture = TestBed.createComponent(CommunicationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
