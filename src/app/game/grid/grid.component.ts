import { Attribute, Component, ElementRef, Input, OnInit } from '@angular/core';
import { DialogEndGameComponent } from '../dialog-end-game/dialog-end-game.component';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from 'src/services/game.service';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { DialogService } from 'src/services/dialog.service';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  template: `
    grid: {{grid}}
    `
})
export class GridComponent implements OnInit {

  game$!:Observable<Game>;
  game!:Game;
  sub!:Subscription;

  restart_element!:Element;

  constructor(
    private _game:GameService, //the game service
    private store: Store //the store
    ) { }

  ngOnInit(): void {

    this.game$ = this.store.select(state => state.game);
    this.sub = this.game$.subscribe((game:Game) => {
      this.game = game;
    });
    this.restart_element = document.querySelector(".grid__finish")!;
    this.restart_element.classList.add("grid__finish--hidden");

  }

  /**
   * @brief restart the game
   */
  restart(){
    this._game.restart();
  }

  /**
   * 
   * @brief check if the game is over
   * 
   * @param colIndex 
   * 
   * @comment this function is called when the user click on a column
   */
  choose(colIndex:number){
    this._game.addPawn(colIndex);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  
}
