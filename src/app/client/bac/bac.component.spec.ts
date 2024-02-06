import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacComponent } from './bac.component';

describe('BacComponent', () => {
  let component: BacComponent;
  let fixture: ComponentFixture<BacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
