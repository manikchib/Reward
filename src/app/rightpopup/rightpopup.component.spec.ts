import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpopupComponent } from './rightpopup.component';

describe('RightpopupComponent', () => {
  let component: RightpopupComponent;
  let fixture: ComponentFixture<RightpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
