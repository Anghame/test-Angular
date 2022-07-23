import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoTwoComponent } from './who-two.component';

describe('WhoTwoComponent', () => {
  let component: WhoTwoComponent;
  let fixture: ComponentFixture<WhoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
