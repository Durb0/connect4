import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  isDarkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.changeTheme();
  }

  /**
   * @brief change the theme of the header
   * @comment it's not optimized, but it works
   */
  changeTheme() {
    if (this.isDarkMode) {
      this.document.documentElement.classList.add('dark');
      this.document.documentElement.classList.remove('light');
    }else{
      this.document.documentElement.classList.remove('dark');
      this.document.documentElement.classList.add('light');
    }
    //get the icon
    let icon = document.getElementsByClassName('theme-icon')[0];
    //set a rotation animation
    icon?.animate([
      { transform: 'rotate(0deg)' },
      { transform: 'rotate(360deg)' }
    ], {
      duration: 500,
      iterations: 1,
      easing: 'ease-in-out'
    });
  }

}
