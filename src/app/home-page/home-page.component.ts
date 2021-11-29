import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import * as actions from '../store/actions/player.action';
import { AppState } from '../store/state/app.state';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  playerId : number = -1;

  constructor(
    private store : Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,  
    private utilService : UtilService) {

  }

  ngOnInit(): void {
    this.store.dispatch(actions.getPlayerCards());
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');      
      if(!this.utilService.isNaN(Number(id))) {
        this.playerId = Number(id);        
        this.store.dispatch(actions.getPlayerCardById({payload: this.playerId}));
      }else {
        this.router.navigate(['/']);
      }
    })
  }

}
