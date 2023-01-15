import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss'],
})
export class GameDashboardComponent implements OnInit {
  showPiGame = false;
  showSnakeLadderGame = false;
  constructor() { }
  ngOnInit() {
  }

  playPiGame() {
    this.showPiGame = true;
    this.showSnakeLadderGame=false;
  }

  playSnakeLadderGame() {
    this.showPiGame = false;
    this.showSnakeLadderGame =true;
  }
}
