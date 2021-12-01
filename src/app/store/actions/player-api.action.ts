//#region Extended Lib Imports
import {Action , createAction , props} from '@ngrx/store';
import { IPlayerCard } from 'src/app/models/player.model';
//#endregion

export enum PlayerAPIActionTypes {
    //#region  Get Players Action Types 
    GET_PLAYERS = "GET_PLAYERS",
    GET_PLAYERS_SUCCESS = "GET_PLAYERS_SUCCESS",
    GET_PLAYERS_FAILURE = "GET_PLAYERS_FAILURE",
    //#endregion
    //#region Get Player By Id Action Types
    GET_PLAYER_BY_ID = "GET_PLAYER_BY_ID",
    GET_PLAYER_BY_ID_SUCCESS = "GET_PLAYERS_SUCCESS",
    GET_PLAYER_BY_ID_FAILURE = "GET_PLAYERS_FAILURE",
    //#endregion
    //#region  Add Player Action Types
    ADD_PLAYER = "GET_PLAYERS",
    ADD_PLAYER_SUCCESS = "GET_PLAYERS_SUCCESS",
    ADD_PLAYER_FAILURE = "GET_PLAYERS_FAILURE",
    //#endregion
    //#region  Update Player Action Types
    UPDATE_PLAYER = "UPDATE_PLAYER",
    UPDATE_PLAYER_SUCCESS = "UPDATE_PLAYER_SUCCESS",
    UPDATE_PLAYER_FAILURE = "UPDATE_PLAYER_FAILURE",
    //#endregion
    //#region  Delete Player Action Types
    DELETE_PLAYER = "DELETE_PLAYER",
    DELETE_PLAYER_SUCCESS = "DELETE_PLAYER_SUCCESS",
    DELETE_PLAYER_FAILURE = "DELETE_PLAYER_FAILURE",
    //#endregion
    //#region  Search Player Card Action Types 
    SEARCH_PLAYER = "SEARCH_PLAYER"
    //#endregion
};

//#region  FETCH ALL Player Card Actions 
export const fetchPlayerCards = createAction(
    PlayerAPIActionTypes.GET_PLAYERS
)
export const fetchPlayerCardsSuccess = createAction(
    PlayerAPIActionTypes.GET_PLAYERS_SUCCESS,
    props<{payload : IPlayerCard[]}>()
)
export const fetchPlayerCardsFailure = createAction(
    PlayerAPIActionTypes.GET_PLAYERS_FAILURE,
    props<{payload : string}>()
)
//#endregion

//#region  ADD Player Card Actions
export const addPlayerCards = createAction(
    PlayerAPIActionTypes.ADD_PLAYER
)
export const addPlayerCardsSuccess = createAction(
    PlayerAPIActionTypes.ADD_PLAYER_SUCCESS,
    props<{payload : IPlayerCard}>()
)
export const addPlayerCardsFailure = createAction(
    PlayerAPIActionTypes.ADD_PLAYER_FAILURE,
    props<{payload : string}>()
)
//#region 

//#region  Update Player Card Actions
export const updatePlayerCards = createAction(
    PlayerAPIActionTypes.UPDATE_PLAYER
)
export const updatePlayerCardsSuccess = createAction(
    PlayerAPIActionTypes.UPDATE_PLAYER_SUCCESS,
    props<{payload : IPlayerCard}>()
)
export const updatePlayerCardsFailure = createAction(
    PlayerAPIActionTypes.UPDATE_PLAYER_FAILURE,
    props<{payload : string}>()
)
//#region 