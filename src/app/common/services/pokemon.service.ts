import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  allPokemonListBehaviour: BehaviorSubject<any> = new BehaviorSubject([]);
  allPokemonList: Observable<any> = this.allPokemonListBehaviour.asObservable();

  pokemonBehaviour: BehaviorSubject<any> = new BehaviorSubject({});
  pokemon: Observable<any> = this.pokemonBehaviour.asObservable();

  pokemonAbilitiesBehaviour: BehaviorSubject<any> = new BehaviorSubject([]);
  pokemonAbilities: Observable<
    any
  > = this.pokemonAbilitiesBehaviour.asObservable();

  pokemonFormsBehaviour: BehaviorSubject<any> = new BehaviorSubject([]);
  pokemonForms: Observable<any> = this.pokemonFormsBehaviour.asObservable();

  pokemonTypesBehaviour: BehaviorSubject<any> = new BehaviorSubject([]);
  pokemonTypes: Observable<any> = this.pokemonTypesBehaviour.asObservable();

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getResource(url): Observable<any> {
    return this.http.get(url);
  }

  setAllPokemons(list: any) {
    this.allPokemonListBehaviour.next(list);
  }

  setPokemon(pokemon) {
    this.pokemonBehaviour.next(pokemon);
  }

  setAbilities(abilities) {
    this.pokemonAbilitiesBehaviour.next(abilities);
  }

  setForms(forms) {
    this.pokemonFormsBehaviour.next(forms);
  }

  setTypes(types) {
    this.pokemonTypesBehaviour.next(types);
  }
}
