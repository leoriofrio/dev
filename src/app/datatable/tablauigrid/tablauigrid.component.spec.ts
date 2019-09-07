import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablauigridComponent } from './tablauigrid.component';

describe('TablauigridComponent', () => {
  let component: TablauigridComponent;
  let fixture: ComponentFixture<TablauigridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablauigridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablauigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
