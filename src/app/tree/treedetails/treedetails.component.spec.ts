import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreedetailsComponent } from './treedetails.component';

describe('TreedetailsComponent', () => {
  let component: TreedetailsComponent;
  let fixture: ComponentFixture<TreedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
