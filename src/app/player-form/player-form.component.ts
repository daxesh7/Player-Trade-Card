// Di
import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable , of} from 'rxjs';

// Store and actions and selectors
import {Store} from '@ngrx/store';
import * as selectors from '../store/selectors/player.selector';
import { AppState } from '../store/state/app.state';
import * as actions from '../store/actions/player.action';

// Sevices and Models
import { initPlayerCard, IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';
import  {PlayerCardService } from '../services/player-card.service';


@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  
 
  @Output() public onAdd : EventEmitter<IPlayerCard> = new EventEmitter();
  @Output() public onUpdate : EventEmitter<IPlayerCard> = new EventEmitter();

  public playerCardInfo : IPlayerCard = initPlayerCard;
  public playerCardInfoForm : FormGroup  | undefined;
 

  constructor(
    private store : Store<AppState> ,
    private utilService : UtilService , 
    private playerCardService : PlayerCardService,
    private formBuilder : FormBuilder
    ) { }

    // custom validator
    firstNameValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const forbidden = control.value === 'demo';   
        // reutn Observable of error if True    
        return forbidden ? of({forbiddenName: true}) : of(null);
      };
    }

    // custom validator
    playerNumberValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const forbidden = !this.utilService.isNullOrEmpty(control.value) && control.value <= 0;           
        // reutn Observable of error if True    
        return forbidden ? of({inValidPlayerNumber: true}) : of(null);
      };
    }

  ngOnInit(): void {   
    this.store.select(selectors.selectorGetSelectedPlayerCard)
    .subscribe((data : IPlayerCard) => {
      this.playerCardInfo = data;

      this.playerCardInfoForm = this.formBuilder.group({
        firstName: [
          this.playerCardInfo.firstName,
          [Validators.required, Validators.minLength(2)],
          // custom validator
          this.firstNameValidator(),
        ],
        lastName: [
          this.playerCardInfo.lastName,
          [Validators.required, Validators.minLength(2)]
          
        ],        
        teamName: [
          this.playerCardInfo.teamName,
          [Validators.required, Validators.minLength(2)]
          
        ],
        playerNumber: [
          this.playerCardInfo.playerNumber,
          [Validators.required],
          // custom validator 
          this.playerNumberValidator()
        ],
        cardValue: [
          this.playerCardInfo.cardValue,
          [],
          // custom validator 
          this.playerNumberValidator()
        ],
      });
    })
  }

  get firstNameControl(){
    return this.playerCardInfoForm?.get('firstName');
  }

  get lastNameControl(){
    return this.playerCardInfoForm?.get('lastName');
  }

  get teamNameControl(){
    return this.playerCardInfoForm?.get('teamName');
  }

  get playerNumberControl(){
    return this.playerCardInfoForm?.get('playerNumber');
  }

  get cardValueControl(){
    return this.playerCardInfoForm?.get('cardValue');
  }

  onSubmit(){
    // console.log(this.playerCardInfoForm);
    if(this.playerCardInfoForm && this.playerCardInfoForm.valid)
    this.onAdd.emit(this.playerCardInfoForm?.value);
  }

  

}
