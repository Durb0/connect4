import { state, style, trigger } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input('cell') cell:string = 'none';

  colors = ["none","red","yellow"];

  constructor(private _element:ElementRef) {}

  ngOnInit(): void {
    
    this.setColor(this.cell);
  }

  /**
   * 
   * @brief set the color of the cell
   * 
   * @param color 
   */
  setColor(color:string){
    this._element.nativeElement.children[0].classList.remove(...this.colors);
    this._element.nativeElement.children[0].classList.add(color);
  }
}
