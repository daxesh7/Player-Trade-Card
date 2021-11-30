import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlayerApiService } from './player-api.service';
import { ITeamsResponse } from '../models/player.model';

describe('PlayerApiService', () => {
  let injector: TestBed;
  let service: PlayerApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [PlayerApiService]
    });
    injector = getTestBed();
    service = injector.get(PlayerApiService);
    httpMock = injector.get(HttpTestingController);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject(
    [HttpTestingController],
    (service: PlayerApiService) => {

    expect(service).toBeTruthy();
  
  }));

  describe('GetTeams', () => {
    it('should return an Observable<ITeamsResponse[]>', () => {
      const dummyTeams : {data :ITeamsResponse[]} = {data : [{
        "id": 1,
        "abbreviation": "ATL",
        "city": "Atlanta",
        "conference": "East",
        "division": "Southeast",
        "full_name": "Atlanta Hawks",
        "name": "Hawks"
    },
    {
        "id": 2,
        "abbreviation": "BOS",
        "city": "Boston",
        "conference": "East",
        "division": "Atlantic",
        "full_name": "Boston Celtics",
        "name": "Celtics"
    }]};
  
      service.getAllTeams().subscribe((teams : {data : ITeamsResponse[]}) => {
        expect(teams.data.length).toBe(2);
        expect(teams).toEqual(dummyTeams);
      });
  
      const req = httpMock.expectOne(`${service.PLAYER_URL}/teams`);
      expect(req.request.method).toBe("GET");
      req.flush(dummyTeams);
    });
  });

});
