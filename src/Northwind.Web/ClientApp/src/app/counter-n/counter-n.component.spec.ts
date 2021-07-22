import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { CounterNComponent } from './counter-n.component';

describe('CounterNComponent', () => {
  let component: CounterNComponent;
  let fixture: ComponentFixture<CounterNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CounterNComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should have count 0 on load as well as increment by 1 when iniitially pressed', () => {
    const countElement = fixture.nativeElement.querySelector('strong');
    expect(countElement.textContent).toEqual('0');

    const incrementButton = fixture.nativeElement.querySelector('button');
    incrementButton.click();
    fixture.detectChanges();
    expect(countElement.textContent).toEqual('1');
  });
});
