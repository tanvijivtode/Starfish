import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaysToHelpComponent } from './ways-to-help.component';

describe('WaysToHelpComponent', () => {
  let component: WaysToHelpComponent;
  let fixture: ComponentFixture<WaysToHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaysToHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaysToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
