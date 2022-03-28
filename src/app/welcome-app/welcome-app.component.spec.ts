import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAppComponent } from './welcome-app.component';

describe('WelcomeAppComponent', () => {
  let component: WelcomeAppComponent;
  let fixture: ComponentFixture<WelcomeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
