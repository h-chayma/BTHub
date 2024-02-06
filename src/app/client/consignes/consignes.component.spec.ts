import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignesComponent } from './consignes.component';

describe('ConsignesComponent', () => {
  let component: ConsignesComponent;
  let fixture: ComponentFixture<ConsignesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsignesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsignesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
