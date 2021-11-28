import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  playerId : number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if(!isNaN(Number(id))) {
        this.playerId = Number(id)
      }else {
        this.router.navigate(['/'])
      }
    })
  }

}
