import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeeditComponent } from './treeedit.component';

describe('TreeeditComponent', () => {
  let component: TreeeditComponent;
  let fixture: ComponentFixture<TreeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
