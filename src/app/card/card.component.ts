import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../common/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() pokemon: any;

  types = [];
  abilities = [];
  forms = [];

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.getAbilities(this.pokemon);
    this.getForms(this.pokemon);
    this.getTypes(this.pokemon);
  }

  getTypes(pokemon) {
    pokemon.types.forEach((element) => {
      if (element.url) {
        this.service.getResource(element.url).subscribe((res) => {
          debugger;
          console.log(res);
          this.types.push(res);
          console.log(this.types);
        });
      }
    });
  }

  getAbilities(pokemon) {
    pokemon.abilities.forEach((element) => {
      if (element.ability.url) {
        this.service.getResource(element.ability.url).subscribe((res) => {
          this.abilities.push(res);
        });
      }
    });
  }

  getForms(pokemon) {
    pokemon.forms.forEach((element) => {
      if (element.url) {
        this.service.getResource(element.url).subscribe((res) => {
          this.forms.push(res);
        });
      }
    });
  }
}
