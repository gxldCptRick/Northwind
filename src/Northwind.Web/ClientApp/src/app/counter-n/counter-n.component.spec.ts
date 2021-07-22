import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterNComponent } from './counter-n.component';

describe('CounterNComponent', () => {
  let component: CounterNComponent;
  let fixture: ComponentFixture<CounterNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
