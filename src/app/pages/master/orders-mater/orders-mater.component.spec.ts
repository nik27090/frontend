import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMaterComponent } from './orders-mater.component';

describe('OrdersMaterComponent', () => {
  let component: OrdersMaterComponent;
  let fixture: ComponentFixture<OrdersMaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
