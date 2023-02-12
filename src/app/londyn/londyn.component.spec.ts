import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LondynComponent } from './londyn.component';

describe('LondynComponent', () => {
  let component: LondynComponent;
  let fixture: ComponentFixture<LondynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LondynComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LondynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
