import {Action, createAction , props} from '@ngrx/store';
import {IPlayerCard, ITeamsResponse} from '../../models/player.model';

export enum PlayerAction {
    ADD_PLAYER_CARD = 'ADD_PLAYER_CARD',
    UPDATE_PLAYER_CARD = 'UPDATE_PLAYER_CARD',
    DELETE_PLAYER_CARD = 'DELETE_PLAYER_CARD',
    GET_PLAYER_CARDS = 'GET_PLAYER_CARDS',
    GET_PLAYER_CARD_BY_ID = 'GET_PLAYER_CARD_BY_ID',
    // api calls
    GET_TEAMS = "GET_TEAMS",
    GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS",
    GET_TEAMS_FAILURE = "GET_TEAMS_FAILURE"
};

export  const addPlayerCard = createAction(
    PlayerAction.ADD_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

export const updatePlayerCard = createAction(
    PlayerAction.UPDATE_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

export const deletePlayerCard = createAction(
    PlayerAction.DELETE_PLAYER_CARD,
    props<{payload : string}>()
)

export const getPlayerCards = createAction(
    PlayerAction.GET_PLAYER_CARDS,
)

export const getPlayerCardById = createAction(
    PlayerAction.GET_PLAYER_CARD_BY_ID,
    props<{payload : string | null}>()
)

export const getTeams = createAction(
    PlayerAction.GET_TEAMS,
)

export const getTeamSuccess = createAction(
    PlayerAction.GET_TEAMS_SUCCESS,
    props<{payload : ITeamsResponse[]}>()
)

export const getTeamsFailure = createAction(
    PlayerAction.GET_TEAMS_FAILURE,
    props<{payload : string}>()
)

