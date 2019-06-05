import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{gameNumber: number}>();
  interval: number = -1;
  public gameNo: number = 0;
  a;

  constructor() { }

  ngOnInit() {
  }

  onStart(): void {
    console.log("number in onStart " + this.gameNo);
    this.a = setInterval(this.startGame.bind(this), 1000);
  }

  startGame(): void {
    
    this.gameStarted.emit({gameNumber: this.gameNo});
    console.log("number emitted " + this.gameNo++);
  }

  onStop(): void {
    console.log("stopping game");
    clearInterval(this.a);
  }

}
