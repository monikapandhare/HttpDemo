import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddpostComponent } from './edit-addpost.component';

describe('EditAddpostComponent', () => {
  let component: EditAddpostComponent;
  let fixture: ComponentFixture<EditAddpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
