import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordersComponent } from './borders.component';

describe('BordersComponent', () => {
  let component: BordersComponent;
  let fixture: ComponentFixture<BordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
