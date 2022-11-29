import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game.model';
import { GameService } from 'src/services/game.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private _game: GameService,
    private store: Store
    ) {}

  game$!:Observable<Game>;
  game!:Game;

  ngOnInit(){
    this.game$ = this.store.select(state => state.game);
    this.game$.subscribe((game:Game) => {
      this.game = game;
    });
  }
}
