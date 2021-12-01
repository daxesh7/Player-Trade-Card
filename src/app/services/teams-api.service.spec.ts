import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, inject, TestBed } from '@angular/core/testing';

import { ITeamsResponse } from '../models/player.model';
import { TeamsApiService } from './teams-api.service';

describe('TeamsApiService', () => {
  let injector: TestBed;
  let service: TeamsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers : [TeamsApiService]
    });
    injector = getTestBed();
    service = injector.get(TeamsApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject(
    [HttpTestingController],
    (service: TeamsApiService) => {

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
