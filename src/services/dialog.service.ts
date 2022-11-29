import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEndGameComponent } from 'src/app/game/dialog-end-game/dialog-end-game.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(data:string){
    //It will open an instance of the final dialog
    return this.dialog.open(DialogEndGameComponent,{
      data: {
        winner: data
      }
    });
  }
}
