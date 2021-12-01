import { getTestBed, inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlayerApiService } from './player-api.service';


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

});
