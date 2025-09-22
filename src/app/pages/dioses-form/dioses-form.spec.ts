import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiosesForm } from './dioses-form';

describe('DiosesForm', () => {
  let component: DiosesForm;
  let fixture: ComponentFixture<DiosesForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiosesForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiosesForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
