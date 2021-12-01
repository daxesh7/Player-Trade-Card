//#region  Core DI Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//#endregion
//#region  Extended Libs Imports 
import { Store } from '@ngrx/store';
import * as playerActions from '../store/actions/player.action';
import { delay } from 'rxjs';
import { AppState } from '../store/state/app.state';
//#endregion
//#region  Models and Services Imports
import { IPlayerCard } from '../models/player.model';

//#endregion 

@Injectable({
  providedIn: 'root'
})
export class PlayerCardApiService {

  public SERVER_URL = "http://localhost:3000/playerCards";  

  constructor(private store : Store<AppState>,private httpClient : HttpClient) { }

  //#region  Player Card CURD 


  addPlayerCard(data : IPlayerCard) {
    return this.httpClient.post(this.SERVER_URL, data).pipe(
      delay(500)
    );
  }

  updatePlayerCard(data : IPlayerCard) {
    return this.httpClient.put(this.SERVER_URL, data).pipe(
      delay(500)
    );
  }

  deletePlayerCard(id : string) {
    return this.httpClient.delete(`${this.SERVER_URL}/${id}`).pipe(
      delay(500)
    );
  }

  getAllPlayerCards() {
    this.httpClient.get<IPlayerCard[]>(this.SERVER_URL)
    .pipe(
      delay(1500)
    )
    .subscribe(
      (response : IPlayerCard[]) => { 
        console.log('response' ,response)
        this.store.dispatch(playerActions.getPlayerCardsApi({payload :response}));
      },
      (error : string) => { console.log(error); });
    
  }

  getPlayerCardById(id : string) {
    return this.httpClient.get(`${this.SERVER_URL}/${id}`).pipe(
      delay(500)
    );
  }

  
 //#endregion

}