import * as TeamsActions from '../actions/teams.action';
import { initTeamState, ITeamState } from '../state/teams.state';
import { createReducer , on} from '@ngrx/store';


// export const TeamReducer = createReducer(
//     state : ITeamState = initTeamState,
//     action : TeamAction
// ) => {
// switch (action.type) {
//     case TeamActionTypes.GET_TEAMS:
//         return {
//             ...state,
//             loading  : true,
//             error: ''
//         }
//     case TeamActionTypes.GET_TEAMS_SUCCESS:
//             return {
//                 ...state,
//                 teams : action.payload,
//                 loading  : false,
//                 error: ''
//             }
//     case TeamActionTypes.GET_TEAMS_FAILURE:
//                 return {
//                     ...state,
//                     teams :[],
//                     loading  : true,
//                     error: action.payload
//                 }

//     default:
//         return state;
// }
// }

export const teamReducer = createReducer(
    initTeamState ,
    on(TeamsActions.getTeams , (state : ITeamState) => {
        return {
            ...state,
            teams: [],
            loading : true,
            error : ''
        };
    }), 
    on(TeamsActions.getTeamSuccess , (state : ITeamState, {payload}) => {
        return {
            ...state,
            teams: payload,
            loading : false,
            error : ''
        };
    }),   
    on(TeamsActions.getTeamsFailure , (state : ITeamState, {payload}) => {
        return {
            ...state,
            teams: [],
            loading : false,
            error : payload
        };
    }),
);