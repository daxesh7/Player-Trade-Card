//#region  Core DI imports
import {Injectable} from '@angular/core';
//#endregion
//#region  Extendeed Lib Imports
import {Actions , ofType , createEffect} from '@ngrx/effects';
import {pipe , map , of} from 'rxjs';
import {catchError, mergeMap } from 'rxjs/operators';
//#endregion
//#region  Actions , Models & Services Imports
import { fetchPlayerCardsSuccess , fetchPlayerCardsFailure , PlayerAPIActionTypes } from '../actions/player-api.action';
import { PlayerApiService } from 'src/app/services/player-api.service';
import { IPlayerCard } from 'src/app/models/player.model';
//#endregion

@Injectable()
export class PlayerCardEffects {

    constructor(private action$ : Actions , private playerApiService : PlayerApiService) {

    }
    
    loadCards$ = createEffect(() => this.action$
    .pipe(
        ofType(PlayerAPIActionTypes.GET_PLAYERS),
        mergeMap(
            () => this.playerApiService.getAllPlayerCards()
            .pipe(
                map((data : IPlayerCard[]) => fetchPlayerCardsSuccess({payload: data})),
                catchError((error : string) => of(fetchPlayerCardsFailure({payload: error})))
            ),
        ),
    ));


} 