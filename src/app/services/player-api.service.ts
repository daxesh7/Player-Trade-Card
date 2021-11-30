import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs';
import { ITeamsResponse } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  public SERVER_URL = "http://localhost:3000/data";
  public PLAYER_URL = "https://www.balldontlie.io/api/v1";
  

  constructor(private httpClient : HttpClient) { }

   // API test Calls
   getAllTeams() {
    return this.httpClient.get<{data :ITeamsResponse[]}>(`${this.PLAYER_URL}/teams`).pipe(
      delay(500)
    );
  }

  addDataToSever(data : {id: string , name : string}) {
    return this.httpClient.post(this.SERVER_URL, data).pipe(
      delay(500)
    );
  }
}
