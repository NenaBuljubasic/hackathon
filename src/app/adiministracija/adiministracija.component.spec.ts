import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdiministracijaComponent } from './adiministracija.component';

describe('AdiministracijaComponent', () => {
  let component: AdiministracijaComponent;
  let fixture: ComponentFixture<AdiministracijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdiministracijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdiministracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
