import { TestBed } from '@angular/core/testing';
import { initPlayerCardList, IPlayerCard } from '../models/player.model';
import {v4 as uuid} from 'uuid';
import { PlayerCardService } from './player-card.service';

describe('PlayerCardService', () => {
  let service: PlayerCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Add Player Card', () => {
    let addOutput : IPlayerCard [] = [];
    beforeEach(()=>{
      service = new PlayerCardService();
      const list : IPlayerCard[] = [];
      const itemToAdd : IPlayerCard = {
        id: '0',
        firstName: 'test',
        lastName: 'test',
        teamName : 'test',
        playerNumber: 12,
        cardValue : 0
      };
      addOutput = service.addToPlayerCardToList(list , itemToAdd);
    });

    it('Should Add Player Card', () => {
      expect(addOutput.length).toEqual(1);
    });

    it('Should Change Id before Adding', () => {
      expect(addOutput[0].id).not.toEqual('0');
    });   
  });

  describe('Update Player Card', () => {  
    let updateOutput : IPlayerCard[] = [];  
    let list : IPlayerCard [] = [{
      id: uuid(),
      firstName: 'test',
      lastName: 'test',
      teamName : 'test',
      playerNumber: 12,
      cardValue : 0
    }];
    const itemToUpdate : IPlayerCard = {
      id: list[0].id,
      firstName: 'test1',
      lastName: 'test1',
      teamName : 'test1',
      playerNumber: 121,
      cardValue : 10
    };
    beforeEach(()=>{
      service = new PlayerCardService();     
      updateOutput = service.updatePlayerCardToList(list , itemToUpdate);
    });

    it('Should Update the card info', () => {
      expect(updateOutput[0].id).not.toEqual('0');
      expect(updateOutput[0].id).toEqual(itemToUpdate.id);
      expect(updateOutput[0].firstName).toEqual(itemToUpdate.firstName);
      expect(updateOutput[0].lastName).toEqual(itemToUpdate.lastName);
      expect(updateOutput[0].teamName).toEqual(itemToUpdate.teamName);
      expect(updateOutput[0].playerNumber).toEqual(itemToUpdate.playerNumber);
      expect(updateOutput[0].cardValue).toEqual(itemToUpdate.cardValue);
    });   
  });

  describe('Delete Player Card', () => {  
    let deleteOutput : IPlayerCard[] = [];  
    let list : IPlayerCard [] = [{
      id: uuid(),
      firstName: 'test',
      lastName: 'test',
      teamName : 'test',
      playerNumber: 12,
      cardValue : 0
    }];
    
    beforeEach(()=>{
      service = new PlayerCardService();     
      deleteOutput = service.deletePlayerCardFromList(list , list[0].id);
    });

    it('Should delete the card info', () => {
      expect(deleteOutput.length).toEqual(0);
    });   
  });

  describe('Get Player Cards', () => {  
    let list : IPlayerCard [] = [];    
    beforeEach(()=>{
      service = new PlayerCardService();     
      list = service.getPlayerCardList();
    });

    it('Should Update the card info', () => {
      expect(list.length).toEqual(initPlayerCardList.length);
      expect(list).toEqual(initPlayerCardList);
    });   
  });

  describe('Get Player Card By Id', () => {  
    let getOutput : IPlayerCard | undefined;  
    let list : IPlayerCard [] = [{
      id: uuid(),
      firstName: 'test',
      lastName: 'test',
      teamName : 'test',
      playerNumber: 12,
      cardValue : 0
    }];
    
    beforeEach(()=>{
      service = new PlayerCardService();     
      getOutput = service.getPlayerCardById(list , list[0].id);
    });

    it('Should delete the card info', () => {
      expect(getOutput).toEqual(list[0]);
    });   
  });

  describe('Get Total Cards Value', () => {  
    let getTotalOutput : number = 0;  
    let list : IPlayerCard [] = [{
      id: uuid(),
      firstName: 'test',
      lastName: 'test',
      teamName : 'test',
      playerNumber: 12,
      cardValue : 2
    },{
      id: uuid(),
      firstName: 'test2',
      lastName: 'test2',
      teamName : 'test2',
      playerNumber: 1,
      cardValue : 4
    }];
    
    beforeEach(()=>{
      service = new PlayerCardService();     
      getTotalOutput = service.getEstimatedCardTotal(list);
    });

    it('Should get total cards value', () => {
      expect(getTotalOutput).toEqual(6);
    });   
  });

});
