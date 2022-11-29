import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Game } from 'src/models/game.model';
import { Player } from 'src/models/player.model';
import { UpdateActivePlayer, UpdateGame, UpdateGrid } from 'src/store/game.action';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  
  checkWinner(colIndex: number, rowIndex: number) {
    const winner = this.game.checkWin(colIndex, rowIndex);
    return winner;
  }

  
  game:Game;

  constructor(
    private store: Store,
    private _dialog: DialogService,
  ) {
    this.game = new Game();
    this.store.dispatch(new UpdateGame(this.game));
  }


  addPawn(colIndex: number) {
    const result = this.game.addPawn(colIndex);
    if (typeof result === 'number') {
      this.store.dispatch(new UpdateGrid(this.game.grid));
      this.store.dispatch(new UpdateActivePlayer(this.game.active_player));
    } else {
      document.querySelector(".grid__finish")!.classList.remove("grid__finish--hidden");
      this._dialog.openDialog(result).afterClosed().subscribe((result) => {
        if (result) {
          this.restart();
        }
      });
    }
    return result;
  }

  restart() {
    document.querySelector(".grid__finish")!.classList.add("grid__finish--hidden");
    this.game.newGame();
    this.store.dispatch(new UpdateGrid(this.game.grid));
    this.store.dispatch(new UpdateActivePlayer(this.game.active_player));
  }

  switchPlayer(){
    this.game.nextActivePlayer();
    this.store.dispatch(new UpdateActivePlayer(this.game.active_player));
  }
}
