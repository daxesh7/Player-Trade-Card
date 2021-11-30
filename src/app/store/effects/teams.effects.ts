import {Injectable} from '@angular/core';
import {Actions , ofType , createEffect} from '@ngrx/effects';
import {getTeamsFailure, getTeamSuccess, TeamActionTypes} from '../actions/teams.action';
import {pipe , map , of} from 'rxjs';
import {catchError, mergeMap } from 'rxjs/operators';
import { PlayerApiService } from 'src/app/services/player-api.service';
import { ITeamsResponse } from 'src/app/models/player.model';


@Injectable()
export class TeamsEffects {

    constructor(private action$ : Actions , private playerApiService : PlayerApiService) {

    }
    
    loadTeams$ = createEffect(() => this.action$
    .pipe(
        ofType(TeamActionTypes.GET_TEAMS),
        mergeMap(
            () => this.playerApiService.getAllTeams()
            .pipe(
                map((data : {data: ITeamsResponse[]}) => getTeamSuccess({payload: data.data})),
                catchError((error : string) => of(getTeamsFailure({payload: error})))
            ),
        ),
    ));


} 