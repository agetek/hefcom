import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  i:number = 0;
  ports: any[] = [
    {
      'title': 'El Pollo Loco',
      'subtitle': 'JavaScript | OOP | HTML | CSS',
      'text': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe against the evil killer chicken.',
      'img': 'polloloco.png',
      'url': 'https://www.hefelmann.com/polloloco/',
      'urlgithub': 'https://github.com/agetek/polloloco',
      'orient': 0
    },
    {
      'title': 'Join',
      'subtitle': 'JavaScript | HTML | CSS',
      'text': 'A task management board inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'img': 'join.png',
      'url': 'https://www.hefelmann.com/join/',
      'urlgithub': 'https://github.com/agetek/join',
      'orient': 1
    },
    {
      'title': 'Pokédex',
      'subtitle': 'JavaScript | HTML | CSS | API',
      'text': 'Based on the PokéAPI a simple library that provides and catalogues pokémon information.',
      'img': 'pokedex.png',
      'url': 'https://www.hefelmann.com/pokedex/',
      'urlgithub': 'https://github.com/agetek/pokedex',
      'orient': 0
    },
    {   
      'title': 'Taste to You',
      'subtitle': 'JavaScript | HTML | CSS',
      'text': 'An example site created with JavaScript, HTML and CSS, like Lieferando.',
      'img': 'tastetoyou.png',
      'url': 'https://www.hefelmann.com/tastetoyou/',
      'urlgithub': 'https://github.com/agetek/tastetoyou',
      'orient': 1
    }
  ];
}
