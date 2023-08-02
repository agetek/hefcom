import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  to_cross: string = 'cross';
  toggle: boolean = false;
  output: string = '<img src="../../assets/img/burger_static.svg" alt="">';
  options: string = 'hide';
  h100: string = '';

  openMenu() {
    if (!this.toggle) {
      this.toggle = true;
      this.output = '<img src="../../assets/img/burger.svg" alt="">';
      this.options = '';
      this.h100 = 'vh_100';
    }
    else {
      this.toggle = false;
      this.output = '<img src="../../assets/img/close.svg" alt="">';
      this.options = 'hide';
      this.h100 = '';
    }
  }
}