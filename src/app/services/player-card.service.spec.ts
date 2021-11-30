import { TestBed } from '@angular/core/testing';
import { IPlayerCard } from '../models/player.model';

import { PlayerCardService } from './player-card.service';

fdescribe('PlayerCardService', () => {
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
    
  })

});
