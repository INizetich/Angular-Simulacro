import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiosesList } from './dioses-list';

describe('DiosesList', () => {
  let component: DiosesList;
  let fixture: ComponentFixture<DiosesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiosesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiosesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
