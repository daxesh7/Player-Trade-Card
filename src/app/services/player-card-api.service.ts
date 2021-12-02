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

/*
  * describe : This is place holder for add api 
  * resturn observable of any
  * param: {IPlayerCard} data
  * retrun: Observale<any> 
  */
  addPlayerCard(data : IPlayerCard) {
    return this.httpClient.post(this.SERVER_URL, data).pipe(
      delay(500)
    );
  }

  /*
  * describe : This is place holder for update api 
  * resturn observable of any
  * param: {IPlayerCard} data
  * retrun: Observale<any> 
  */
  updatePlayerCard(data : IPlayerCard) {
    return this.httpClient.put(this.SERVER_URL, data).pipe(
      delay(500)
    );
  }

  /*
  * describe : This is place holder for delete api 
  * resturn observable of any
  * param: {string} id
  * retrun: Observale<any> 
  */
  deletePlayerCard(id : string) {
    return this.httpClient.delete(`${this.SERVER_URL}/${id}`).pipe(
      delay(500)
    );
  }

  /*
  * describe : This is place holder for get api 
  * suscribe observable of IPlayerCard[]
  * to call action from service
  */
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


  /*
  * describe : This is place holder for get api 
  * resturn observable of IPlayerCard
  * param: {string} id
  * retrun: Observale<IPlayerCard> 
  */
  getPlayerCardById(id : string) {
    return this.httpClient.get<IPlayerCard>(`${this.SERVER_URL}/${id}`).pipe(
      delay(500)
    );
  }

  
 //#endregion

}