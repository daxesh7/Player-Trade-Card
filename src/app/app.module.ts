// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

// store
import {StoreModule} from '@ngrx/store';
import {playerCardReducer} from './store/reducers/player.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

// compoents
import { AppComponent } from './app.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerHeaderComponent } from './player-header/player-header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';





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
    StoreModule.forRoot({
      playerCardState : playerCardReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
