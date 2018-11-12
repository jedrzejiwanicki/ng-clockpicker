import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursModePanelComponent } from './hours-mode-panel.component';

describe('HoursModePanelComponent', () => {
  let component: HoursModePanelComponent;
  let fixture: ComponentFixture<HoursModePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursModePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursModePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
