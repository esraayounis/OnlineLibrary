import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewborrowComponent } from './show-newborrow.component';

describe('ShowNewborrowComponent', () => {
  let component: ShowNewborrowComponent;
  let fixture: ComponentFixture<ShowNewborrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewborrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewborrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
