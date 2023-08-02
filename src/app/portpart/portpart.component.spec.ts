import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortpartComponent } from './portpart.component';

describe('PortpartComponent', () => {
  let component: PortpartComponent;
  let fixture: ComponentFixture<PortpartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortpartComponent]
    });
    fixture = TestBed.createComponent(PortpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
