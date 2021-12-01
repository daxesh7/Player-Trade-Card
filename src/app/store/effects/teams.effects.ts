//#region  Core DI imports
import {Injectable} from '@angular/core';
//#endregion
//#region  Extendeed Lib Imports
import {Actions , ofType , createEffect} from '@ngrx/effects';
import {pipe , map , of} from 'rxjs';
import {catchError, mergeMap } from 'rxjs/operators';
//#endregion
//#region  Actions , Models & Services Imports
import {getTeamsFailure, getTeamSuccess, TeamActionTypes} from '../actions/teams.action';
import { TeamsApiService } from 'src/app/services/teams-api.service';
import { ITeamsResponse } from 'src/app/models/player.model';
//#endregion

@Injectable()
export class TeamsEffects {

    constructor(private action$ : Actions , private teamsApiService : TeamsApiService) {

    }
    
    loadTeams$ = createEffect(() => this.action$
    .pipe(
        ofType(TeamActionTypes.GET_TEAMS),
        mergeMap(
            () => this.teamsApiService.getAllTeams()
            .pipe(
                map((data : {data: ITeamsResponse[]}) => getTeamSuccess({payload: data.data})),
                catchError((error : string) => of(getTeamsFailure({payload: error})))
            ),
        ),
    ));


} 