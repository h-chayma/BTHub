import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresBacComponent } from './apres-bac.component';

describe('ApresBacComponent', () => {
  let component: ApresBacComponent;
  let fixture: ComponentFixture<ApresBacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApresBacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApresBacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
