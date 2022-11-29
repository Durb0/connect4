import { CdkDragEnd, CdkDragMove, CdkDragStart } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Game } from 'src/models/game.model';
import { DialogService } from 'src/services/dialog.service';
import { GameService } from 'src/services/game.service';

@Component({
  selector: 'app-pawn-zone',
  templateUrl: './pawn-zone.component.html',
  styleUrls: ['./pawn-zone.component.scss']
})
export class PawnZoneComponent implements OnInit {

  /**
   * @brief active_player observable
   */
  game$:Observable<Game> | undefined;
  color:string = "";
  sub!:Subscription;

  columns:NodeListOf<Element> | undefined;
  
  constructor(private _game: GameService, //the game service
              private _dialog: DialogService, //the dialog service
              private store: Store //the store
              ) { }


  ngOnInit(): void {
    this.game$ = this.store.select(state => state.game);
    this.sub = this.game$.subscribe((game:Game) => {
      this.color = game.players[game.active_player].name;
    });
    this.columns = document.querySelectorAll(".grid__column");
  }

  /**
   * THE DRAG AND DROP EVENTS
   */

  /**
   * 
   * @brief the pawn drag start event
   * 
   * @param event 
   */
  onPawnStart(event:CdkDragStart){
    let pawn = document.querySelector(".active-pawn");
    pawn?.classList.remove("active-pawn--stop");
    pawn?.classList.add("active-pawn--move");
  }

  /**
   * 
   * @brief the pawn drag move event
   * 
   * @param event 
   */
  onPawnMove(event:CdkDragMove){
    const columns = document.querySelectorAll(".grid__column");
    /**
     * @brief remove the hover class from all the columns, and check if the pawn is over a column, if so add the hover class
     */
    for (let colIndex = 0; colIndex  < columns.length; colIndex ++) {
      const col = columns[colIndex];
      const colRect = col.getBoundingClientRect();
      if( event.pointerPosition.x > colRect.left 
          && event.pointerPosition.x < colRect.right
          && event.pointerPosition.y > colRect.top
          && event.pointerPosition.y < colRect.bottom){
        col.classList.add("grid__column--hover");
      }else{
        col.classList.remove("grid__column--hover");
      }
    }
  }

  /**
   * 
   * @brief the pawn drag end event
   * 
   * @param event 
   */
  onPawnDrop(event:CdkDragEnd){
    const columns = document.querySelectorAll(".grid__column");
    for (let colIndex = 0; colIndex  < columns.length; colIndex ++) {
      const column = columns[colIndex ];
      const columnRect = column.getBoundingClientRect();
      column.classList.remove("grid__column--hover");
      /**
       * @brief check if the pawn is over a column, if so add the pawn to the column
       */
      if( event.dropPoint.x > columnRect.left 
          && event.dropPoint.x < columnRect.right
          && event.dropPoint.y > columnRect.top
          && event.dropPoint.y < columnRect.bottom){
        this._game.addPawn(colIndex);
      }
    }
    let pawn = document.querySelector(".active-pawn");
    event.source._dragRef.reset();
    pawn?.classList.remove("active-pawn--move");
    pawn?.classList.add("active-pawn--stop");
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
