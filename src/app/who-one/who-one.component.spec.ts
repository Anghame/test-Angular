import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoOneComponent } from './who-one.component';

describe('WhoOneComponent', () => {
  let component: WhoOneComponent;
  let fixture: ComponentFixture<WhoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
