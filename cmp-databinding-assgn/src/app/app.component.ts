import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assgn';
  oddNumbers: Array<number> = new Array();
  evenNumbers: Array<number> = new Array();

  onNumberEmitted(gameNumberData: {gameNumber: number}): void {
    console.log("Listening event in app" + gameNumberData.gameNumber);
    if (gameNumberData.gameNumber % 2 == 1) {
      this.oddNumbers.push(gameNumberData.gameNumber);
    } else {
      this.evenNumbers.push(gameNumberData.gameNumber);
    }
  }
}
