import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAppartmentComponent } from './detail-appartment.component';

describe('DetailAppartmentComponent', () => {
  let component: DetailAppartmentComponent;
  let fixture: ComponentFixture<DetailAppartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAppartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailAppartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
