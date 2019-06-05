import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  public gameNo: number = 1;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStart(): void {
    console.log("number in onStart " + this.gameNo);
    this.interval = setInterval(() => {
      this.gameStarted.emit(this.gameNo);
      console.log("number emitted " + this.gameNo++);
    }, 1000);
  }

  onStop(): void {
    console.log("stopping game");
    clearInterval(this.interval);
  }

}
