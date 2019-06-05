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

  onNumberEmitted(gameNumber: number): void {
    console.log("Listening event in app" + gameNumber);
    if (gameNumber % 2 == 1) {
      this.oddNumbers.push(gameNumber);
    } else {
      this.evenNumbers.push(gameNumber);
    }
  }
}
