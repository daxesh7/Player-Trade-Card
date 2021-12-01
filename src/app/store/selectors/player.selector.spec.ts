import { selectorGetPlayerCards, selectorGetSelectedPlayerCard , selctorGetSearchQuery} from "./player.selector";
import { initPlayerCardState  } from "../state/player.state";
import { AppState } from "../state/app.state";
import { IPlayerCard, testCardList } from 'src/app/models/player.model';
 
describe("Selectors", () => {
  const initialState: AppState = {
    playerCardState : initPlayerCardState
  };
 
  it("should select the card list", () => {
    const result = selectorGetPlayerCards.projector(initialState.playerCardState);
    expect(result.length).toEqual(0);
  });  
});

describe("SelectorGetPlayerCards", () => {
    const initialState: AppState = {
      playerCardState : {
          ...initPlayerCardState,
          playerCards: testCardList
      }
    };
    it("should get card should have value", () => {
      const result : IPlayerCard[] = selectorGetPlayerCards.projector(initialState.playerCardState);
      expect(result.length).toEqual(3);
      expect(result[0].firstName).toEqual('Ike');
    });  
});

describe("SelectorGetSelectedPlayerCard", () => {
    const initialState: AppState = {
      playerCardState : {
          ...initPlayerCardState,
          selectedPlayerCard: testCardList[0]
      }
    };
    it("should get selected card should have value", () => {
      const result :IPlayerCard = selectorGetSelectedPlayerCard.projector(initialState.playerCardState);
      expect(result).toBeTruthy();
      expect(result.firstName).toEqual('Ike');
    });  
});

describe("SelctorGetSearchQuery", () => {
    const initialState: AppState = {
      playerCardState : {
          ...initPlayerCardState,
      }
    };
    it("should get search query should not have value", () => {
      const result : string = selctorGetSearchQuery.projector(initialState.playerCardState);
      expect(result).toBeFalsy();      
    });  
});