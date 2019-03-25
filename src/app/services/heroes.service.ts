import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from './../interfaces/heroe.interface';
import {map} from 'rxjs/operators';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroes-1d546.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroes-1d546.firebaseio.com/heroes/';
  constructor( private http: HttpClient) { }

  newHero( heroe: Heroe) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // https://angular.io/guide/http#making-a-post-request
    return this.http.post<Heroe>( this.heroesUrl, heroe , httpOptions )
          .pipe(
          map( res => {
            console.log(res.name);
            return res;
          }));
  }

   updateHero( heroe: Heroe, key$: string) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
      // https://angular.io/guide/http#making-a-post-request
      return this.http.put<Heroe>( `${ this.heroeUrl }${ key$ }.json`, heroe , httpOptions )
            .pipe(
            map( res => {
              console.log(res.name);
              return res;
            }));
    }

    getHeroe ( key$: string ) {
      console.log(`${ this.heroeUrl }${ key$ }.json`);
      return this.http.get<Heroe>( `${ this.heroeUrl }${ key$ }.json` );
    }

    getHeroes () {
      return this.http.get<Heroe>( this.heroesUrl );
    }

    deleteHero ( key$: string) {
      const url = `${ this.heroeUrl }/${ key$ }.json`;
      console.log(url);
      return this.http.delete<Heroe>( url);
    }
}

