import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { ITeamsResponse } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsApiService {

  public SERVER_URL = "http://localhost:3000/playerCards";
  public PLAYER_URL = "https://www.balldontlie.io/api/v1";
  

  constructor(private httpClient : HttpClient) { }

   //#region  GET ALL TEAMS API CALLS 
   getAllTeams() {
    return this.httpClient.get<{data :ITeamsResponse[]}>(`${this.PLAYER_URL}/teams`).pipe(
      delay(500)
    );
  }
  //#endregion

}
