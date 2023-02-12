import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParyzComponent } from './paryz.component';

describe('ParyzComponent', () => {
  let component: ParyzComponent;
  let fixture: ComponentFixture<ParyzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParyzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
