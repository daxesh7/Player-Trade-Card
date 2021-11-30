// core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'home/:id', component: HomePageComponent },
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent }

];


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
    RouterModule.forRoot(routes),    
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      playerCardState : playerCardReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
