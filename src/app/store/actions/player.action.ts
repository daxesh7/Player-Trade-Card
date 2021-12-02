import {Action, createAction , props} from '@ngrx/store';
import {IPlayerCard} from '../../models/player.model';

export enum PlayerAction {
    ADD_PLAYER_CARD = 'ADD_PLAYER_CARD',
    UPDATE_PLAYER_CARD = 'UPDATE_PLAYER_CARD',
    DELETE_PLAYER_CARD = 'DELETE_PLAYER_CARD',
    GET_PLAYER_CARDS = 'GET_PLAYER_CARDS',
    GET_PLAYER_CARD_BY_ID = 'GET_PLAYER_CARD_BY_ID',
    // api calls
    GET_TEAMS = "GET_TEAMS",
    GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS",
    GET_TEAMS_FAILURE = "GET_TEAMS_FAILURE",

    //#region  Get Players Action Types 
    GET_PLAYERS_API = "GET_PLAYERS",
    GET_PLAYERS_API_SUCCESS = "GET_PLAYERS_SUCCESS",
    GET_PLAYERS_API_FAILURE = "GET_PLAYERS_FAILURE",
    //#endregion
};

/*
  * describe : This is action to support 
  * add player card event
  * payload: {IPlayerCard} 
  * ofType: ADD_PLAYER_CARD
  * retrun: Action<{payload: IPlayerCard}> 
  */
export  const addPlayerCard = createAction(
    PlayerAction.ADD_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

/*
  * describe : This is action to support 
  * update player card event
  * payload: {IPlayerCard} 
  * ofType: UPDATE_PLAYER_CARD
  * retrun: Action<{payload: IPlayerCard}> 
  */
export const updatePlayerCard = createAction(
    PlayerAction.UPDATE_PLAYER_CARD,
    props<{payload : IPlayerCard}>()
)

/*
  * describe : This is action to support 
  * delete player card event
  * payload: {string} 
  * ofType: DELETE_PLAYER_CARD
  * retrun: Action<{payload: string}> 
  */
export const deletePlayerCard = createAction(
    PlayerAction.DELETE_PLAYER_CARD,
    props<{payload : string}>()
)

/*
  * describe : This is action to support 
  * get player cards event  
  * ofType: GET_PLAYER_CARDS
  * retrun: Action<> 
  */
export const getPlayerCards = createAction(
    PlayerAction.GET_PLAYER_CARDS,
)


/*
  * describe : This is action to support 
  * get player card by id event
  * payload: {string | null} 
  * ofType: GET_PLAYER_CARD_BY_ID
  * retrun: Action<{payload: string | null}> 
  */
export const getPlayerCardById = createAction(
    PlayerAction.GET_PLAYER_CARD_BY_ID,
    props<{payload : string | null}>()
)


//#region  API CALL ACTIONS

export const getPlayerCardsApi = createAction(
    PlayerAction.GET_PLAYERS_API,
    props<{payload : IPlayerCard[]}>()
)

//#endregion



