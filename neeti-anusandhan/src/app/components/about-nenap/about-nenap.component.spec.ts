import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNenapComponent } from './about-nenap.component';

describe('AboutNenapComponent', () => {
  let component: AboutNenapComponent;
  let fixture: ComponentFixture<AboutNenapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutNenapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutNenapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
