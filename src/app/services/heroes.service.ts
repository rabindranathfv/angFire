import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

// interface
import { Heroe } from '../interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL: string = 'https://heroes-1d546.firebaseio.com/heroes.json';

  constructor( private http: Http) { }

  public newHero( heroe: Heroe) {
      console.log('enter service');
      let body = JSON.stringify( heroe );
      let headers = new Headers({
        'content-type': 'application/json'
      });

      return this.http.post( this.heroesURL, body, { headers } )
                 .pipe( map( (resp) => {
                  console.log(resp.json());
                  return resp.json();
                })
              );
                  
  }

  /**
   * getHeroes
   */
  public getHeroes() {
    return this.http.get(this.heroesURL);
  }
}
