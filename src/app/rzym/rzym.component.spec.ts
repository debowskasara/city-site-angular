import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RzymComponent } from './rzym.component';

describe('RzymComponent', () => {
  let component: RzymComponent;
  let fixture: ComponentFixture<RzymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RzymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RzymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
