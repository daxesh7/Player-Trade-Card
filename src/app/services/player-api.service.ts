//#region  Core DI Imports
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//#endregion
//#region  Extended Libs Imports 
import { delay } from 'rxjs';
//#endregion
//#region  Models and Services Imports
import { IPlayerCard } from '../models/player.model';
//#endregion 

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  public SERVER_URL = "http://localhost:3000/playerCards";  

  constructor(private httpClient : HttpClient) { }

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
    return this.httpClient.get(this.SERVER_URL).pipe(
      delay(500)
    );
  }

  getPlayerCardById(id : string) {
    return this.httpClient.get(`${this.SERVER_URL}/${id}`).pipe(
      delay(500)
    );
  }

  
 //#endregion

}
