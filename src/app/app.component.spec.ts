// import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create an instance of AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set the initial value of title to "app-b"', () => {
    expect(component.title).toEqual('app-b');
  });

  it('should return an empty string when calling functionThree', () => {
    expect(component.funtionThree()).toEqual('');
  });

  it('should concatenate the value returned from onListen() to the title property when calling onClick()', () => {
    component.onClick(1);
    expect(component.title).toEqual('app-b1');
  });

  it('should return the same value that was passed as argument when calling onListen()', () => {
    expect(component.onListen(2)).toEqual(2);
  });

  it('should return the number 1 when calling _funcionOne()', () => {
    expect(component['_funcionOne']()).toEqual(1);
  });
});
