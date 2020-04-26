import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../common/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  allPokemonList: any = [];
  pokemonList: any = [];
  pokemon: any = {};

  constructor(private service: PokemonService) {}

  ngOnInit() {
    this.service.allPokemonList.subscribe((res) => (this.allPokemonList = res));

    this.service.pokemon.subscribe((res) => {
      this.pokemon = res;
    });

    this.service.getAllPokemons().subscribe((res) => {
      this.service.setAllPokemons(res.results);
      this.getPokemonDetailedList();
    });
  }

  getPokemonDetailedList() {
    if (this.allPokemonList.length) {
      this.allPokemonList.forEach((element) => {
        if (element.url) {
          this.service.getResource(element.url).subscribe((res) => {
            this.pokemon = res;
            this.pokemon.image = `https://pokeres.bastionbot.org/images/pokemon/${res.id}.png`;
            this.pokemonList = [...this.pokemonList, this.pokemon];
            this.pokemonList.sort((a, b) => a.id - b.id);
          });
        }
      });
    }
  }
}
