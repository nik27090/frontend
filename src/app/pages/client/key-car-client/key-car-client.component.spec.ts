import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCarClientComponent } from './key-car-client.component';

describe('KeyCarClientComponent', () => {
  let component: KeyCarClientComponent;
  let fixture: ComponentFixture<KeyCarClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCarClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
