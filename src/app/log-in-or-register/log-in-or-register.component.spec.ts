import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInOrRegisterComponent } from './log-in-or-register.component';

describe('LogInOrRegisterComponent', () => {
  let component: LogInOrRegisterComponent;
  let fixture: ComponentFixture<LogInOrRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInOrRegisterComponent]
    });
    fixture = TestBed.createComponent(LogInOrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
