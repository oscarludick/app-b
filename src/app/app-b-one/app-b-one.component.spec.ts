import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBOneComponent } from './app-b-one.component';

describe('AppBOneComponent', () => {
  let component: AppBOneComponent;
  let fixture: ComponentFixture<AppBOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppBOneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppBOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
