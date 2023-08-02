import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-portpart',
  templateUrl: './portpart.component.html',
  styleUrls: ['./portpart.component.scss']
})
export class PortpartComponent {
  @Input() port = {
    'title': '',
    'subtitle': '',
    'text': '',
    'id': '',
    'img': '',
    'url': '',
    'urlgithub': '',
    'orient': 0
  };

  @Input() i: number = 0;

  stil1: string = '';
  stil2: string = '';
  stil3: string = '';
  stil4: string = '';
  stil5: string = '';

  enter(): void  {
    this.stil1 = 'port_canvas_in';
    this.stil2 = 'port_img_in';
    this.stil3 = 'port_arrow_in';
    this.stil4 = 'port_side_in';
    this.stil5 = 'port_side_1_in';
  }

  leave(): void {
    this.stil1 = '';
    this.stil2 = '';
    this.stil3 = '';
    this.stil4 = '';
    this.stil5 = '';
  }
}