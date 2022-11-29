import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-end-game',
  templateUrl: './dialog-end-game.component.html',
  styleUrls: ['./dialog-end-game.component.scss']
})
export class DialogEndGameComponent implements OnInit {
  data = {
    winner: ''
  };

  text = "The winner is: "; //the text to display in the dialog

  constructor(
    dialogRef: MatDialogRef<DialogEndGameComponent>,
    @Inject(MAT_DIALOG_DATA) data: {
      winner: string
    },
    public elementRef: ElementRef
    ) {
    this.data = data;
    }

    /**
     * 
     * @brief change the text of the dialog, depend on the input
     */
  ngOnInit(): void {
    if(this.data.winner == 'red'){
      //set background color to red
      document.querySelector('mat-dialog-container')?.classList.add('dialog--red');
      this.text = "The winner is red !";
    }else if(this.data.winner == 'yellow'){
      //set background color to yellow
      document.querySelector('mat-dialog-container')?.classList.add('dialog--yellow');
      this.text = "The winner is yellow !";
    }
    else{
      //set background color to grey
      document.querySelector('mat-dialog-container')?.classList.add('dialog--draw');
      this.text = "It's a draw !";
    }
  }

}
