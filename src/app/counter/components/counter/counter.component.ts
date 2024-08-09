import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1>
    {{ title }}
    </h1>

    <h3>
      Counter: {{ counter }}
    </h3>

    <button (click)="increaseBy(+1)" >+1</button>
    <button (click)="reseatCounter()">Reset</button>
    <button (click)="increaseBy(-1)" >-1</button>
    `
})
export class CounterComponent {
  title : string = "Counter App";
  counter : number = 10;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  decreaseBy( value:number ): void {
    this.counter -= value;
  }

  reseatCounter() {
    this.counter = 10;
  }
}
