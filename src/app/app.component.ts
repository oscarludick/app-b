import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-b';

  constructor() {}

  public funtionThree(): string {
    return '';
  }

  onClick(a: number): boolean {
    this.title += this.onListen(1);
    return false;
  }

  onListen(b: number): number {
    return b;
  }

  private _funcionOne() {
    return 1;
  }

  protected functionTwo(): AppComponent {
    return this;
  }
}
