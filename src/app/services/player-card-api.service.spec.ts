import { getTestBed, inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { PlayerCardApiService } from './player-card-api.service';
import { StoreModule } from '@ngrx/store';
import { playerCardReducer } from '../store/reducers/player.reducer';

describe('PlayerApiService', () => {
  let injector: TestBed;
  let service: PlayerCardApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule , 
        StoreModule.forRoot({
        playerCardState : playerCardReducer
      })],
      providers : [PlayerCardApiService],
      
    });
    injector = getTestBed();
    service = injector.get(PlayerCardApiService);
    httpMock = injector.get(HttpTestingController);
    
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject(
    [HttpTestingController],
    (service: PlayerCardApiService) => {

    expect(service).toBeTruthy();
  
  }));

});