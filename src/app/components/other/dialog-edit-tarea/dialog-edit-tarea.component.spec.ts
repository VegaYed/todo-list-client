import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditTareaComponent } from './dialog-edit-tarea.component';

describe('DialogEditTareaComponent', () => {
  let component: DialogEditTareaComponent;
  let fixture: ComponentFixture<DialogEditTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditTareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
