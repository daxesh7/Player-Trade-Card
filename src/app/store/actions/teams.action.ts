import {Action, createAction, props } from '@ngrx/store';
import {ITeamsResponse} from '../../models/player.model';

export enum TeamActionTypes {
    // api calls
    GET_TEAMS = "GET_TEAMS",
    GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS",
    GET_TEAMS_FAILURE = "GET_TEAMS_FAILURE"
};

export class GetTeams implements Action {
    readonly type = TeamActionTypes.GET_TEAMS;
}

// export class GetTeamSuccess implements Action {
//     readonly type = TeamActionTypes.GET_TEAMS_SUCCESS;
//     payload : ITeamsResponse[] = []
//     constructor(payload : ITeamsResponse[]) {
//         this.payload = payload;
//     }
// }

// export class GetTeamsFailure implements Action {
//     readonly type = TeamActionTypes.GET_TEAMS_FAILURE;
//     payload : string = '';
//     constructor(payload : string) {
//         this.payload = payload;
//     }
// }

// export type TeamAction = GetTeams | GetTeamSuccess | GetTeamsFailure


export const getTeams = createAction(
    TeamActionTypes.GET_TEAMS,
)

export const getTeamSuccess = createAction(
    TeamActionTypes.GET_TEAMS_SUCCESS,
    props<{payload : ITeamsResponse[]}>()
)

export const getTeamsFailure = createAction(
    TeamActionTypes.GET_TEAMS_FAILURE,
    props<{payload : string}>()
)

