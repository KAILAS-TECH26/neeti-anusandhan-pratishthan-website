import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveDirectorComponent } from './executive-director.component';

describe('ExecutiveDirectorComponent', () => {
  let component: ExecutiveDirectorComponent;
  let fixture: ComponentFixture<ExecutiveDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutiveDirectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutiveDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
