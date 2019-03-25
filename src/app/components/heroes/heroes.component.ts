import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable, Subscriber } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';

// services
import { HeroesService } from 'src/app/services/heroes.service';

// interface
import { Heroe } from 'src/app/interfaces/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


  heroes: any;

  constructor( private http: Http,
              private _heroesService: HeroesService ) { }

  ngOnInit() {
    this.getHeroes();
  }

  /**
   * getHeroes
   */
  public getHeroes() {
    this._heroesService.getHeroes()
        .subscribe((resp) => {
          console.log(resp);
          console.log(resp['_body']);
        });
  }

}
