// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

// store
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {playerCardReducer} from './store/reducers/player.reducer';
import {teamReducer} from './store/reducers/team.reducers';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';


// compoents
import { AppComponent } from './app.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerHeaderComponent } from './player-header/player-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// custom modules
import { AppRoutingModule } from './app-routing.module';
import { TeamsEffects } from './store/effects/teams.effects';





@NgModule({
  declarations: [
    AppComponent,
    PlayerFormComponent,
    PlayerListComponent,
    PlayerHeaderComponent,
    HomePageComponent,
    AboutPageComponent,
    FooterPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      playerCardState : playerCardReducer,
      teamsState : teamReducer
    }),
    EffectsModule.forRoot([TeamsEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
