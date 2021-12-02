//#region  Core Di 
import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
//#endregion
//#region  Extended Libs
import {Store} from '@ngrx/store';
import * as selectors from '../store/selectors/player.selector';
import { AppState } from '../store/state/app.state';
import { Observable , of} from 'rxjs';
//#endregion
//#region  Sevices and Models
import { initPlayerCard, IPlayerCard } from '../models/player.model';
import { UtilService } from '../services/util.service';
import  {PlayerCardService } from '../services/player-card.service';
//#endregion

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {

  
 
  @Output() public submitCardEvent : EventEmitter<IPlayerCard> = new EventEmitter();
  

  public playerCardInfo : IPlayerCard = initPlayerCard;
  public playerCardInfoForm : FormGroup  | undefined;
 

  constructor(
    private store : Store<AppState> ,
    private utilService : UtilService , 
    private playerCardService : PlayerCardService,
    private formBuilder : FormBuilder
    ) { }

    /*
    * describe : This a is async custom validator 
    * on the first name to not have number values in it
    * param: none
    * retrun: void 
    */
    noNumberAllowedValidator(): AsyncValidatorFn {
      return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        const regexOnlyString = /^[A-Z]+$/i;
        const forbidden = !control.value.trim().match(regexOnlyString);
        // reutn Observable of error if True    
        return forbidden ? of({forbiddenName: true}) : of(null);
      };
    }

    /*
    * describe : This a is async custom validator 
    * on the player number to not have negative value
    * param: none
    * retrun: void 
    */
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
      this.setFormBuilder(this.playerCardInfo);      
    })
  }

   /*
    * describe : This a is async custom function 
    * set the form base on the PlayerCard Model values
    * param: {IPlayerCard} playerCardInfo
    * retrun: void 
    */
  setFormBuilder(playerCardInfo : IPlayerCard) {
    this.playerCardInfoForm = this.formBuilder.group({
      id: [
        playerCardInfo.id,
      ],
      firstName: [
        playerCardInfo.firstName,
        [Validators.required, Validators.minLength(2)],
        // custom validator
        this.noNumberAllowedValidator(),
      ],
      lastName: [
        playerCardInfo.lastName,
        [Validators.required, Validators.minLength(2)],
        // custom validator
        this.noNumberAllowedValidator(),        
      ],        
      teamName: [
        playerCardInfo.teamName,
        [Validators.required, Validators.minLength(2)],
        // custom validator
        this.noNumberAllowedValidator(),            
      ],
      playerNumber: [
        playerCardInfo.playerNumber,
        [Validators.required],
        // custom validator 
        this.playerNumberValidator()
      ],
      cardValue: [
        playerCardInfo.cardValue,
        [],
        // custom validator 
        this.playerNumberValidator()
      ],
    });
  }

  //#region  Get ALL Form Controlls
   /*
    * describe : This is a function 
    * get the firstName form Control from the form group
    * which is used to validate fields in html and errors
    * param: none
    * retrun: void 
    */ 
  get firstNameControl(){
    return this.playerCardInfoForm?.get('firstName');
  }

  /*
    * describe : This is a function 
    * get the last Name form Control from the form group
    * which is used to validate fields in html and errors
    * param: none
    * retrun: void 
    */
  get lastNameControl(){
    return this.playerCardInfoForm?.get('lastName');
  }

  /*
    * describe : This is a function 
    * get the team Name form Control from the form group
    * which is used to validate fields in html and errors
    * param: none
    * retrun: void 
    */
  get teamNameControl(){
    return this.playerCardInfoForm?.get('teamName');
  }

  /*
    * describe : This is a function 
    * get the player Number form Control from the form group
    * which is used to validate fields in html and errors
    * param: none
    * retrun: void 
    */
  get playerNumberControl(){
    return this.playerCardInfoForm?.get('playerNumber');
  }

  /*
    * describe : This is a function 
    * get the card value form Control from the form group
    * which is used to validate fields in html and errors
    * param: none
    * retrun: void 
    */
  get cardValueControl(){
    return this.playerCardInfoForm?.get('cardValue');
  }
  //#endregion

  /*
  * describe : This function that handles submit event from the form
  * and reset the form , emited value is handle to dispatch add and upadte actions
  * param: none
  * retrun: void 
  */
  submitCard(){    
    if(this.playerCardInfoForm && this.playerCardInfoForm.valid){
      this.submitCardEvent.emit(this.playerCardInfoForm?.value);
      this.playerCardInfo = initPlayerCard;
      this.playerCardInfoForm.reset();
    }   
  }

  

}
