import {Action, createAction, props } from '@ngrx/store';
import {ITeamsResponse} from '../../models/player.model';

export enum TeamActionTypes {
    // Get Teams
    GET_TEAMS = "GET_TEAMS",
    GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS",
    GET_TEAMS_FAILURE = "GET_TEAMS_FAILURE"

};

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

