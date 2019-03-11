import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

// services
import { HeroesService } from './services/heroes.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
