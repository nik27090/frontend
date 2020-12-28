import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCallClientComponent } from './master-call-client.component';

describe('MasterCallClientComponent', () => {
  let component: MasterCallClientComponent;
  let fixture: ComponentFixture<MasterCallClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCallClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCallClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
