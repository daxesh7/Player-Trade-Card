import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { initPlayerCard, IPlayerCard } from '../models/player.model';
import { playerCardReducer } from '../store/reducers/player.reducer';

import { PlayerFormComponent } from './player-form.component';

fdescribe('PlayerFormComponent', () => {
  let component: PlayerFormComponent;
  let fixture: ComponentFixture<PlayerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
                ReactiveFormsModule , 
                StoreModule.forRoot({
                  playerCardState : playerCardReducer
                })
              ],
      declarations: [ PlayerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form Inputs' , () => {
    it('should contain first name input element with empty default value', () => {
      const inputformElements = fixture.debugElement.nativeElement.querySelectorAll('input#firstName');
      expect(inputformElements[0].value).toEqual('');
      expect(inputformElements.length).toEqual(1);
    });

    it('should contain last name input element with empty default value', () => {
      const formElements = fixture.debugElement.nativeElement.querySelectorAll('input#lastName');
      expect(formElements[0].value).toEqual('');
      expect(formElements.length).toEqual(1);
    });

    it('should contain team name input element with empty default value', () => {
      const formElements = fixture.debugElement.nativeElement.querySelectorAll('input#teamName');
      expect(formElements[0].value).toEqual('');
      expect(formElements.length).toEqual(1);
    });

    it('should contain player number input element with 0 default value', () => {
      const formElements = fixture.debugElement.nativeElement.querySelectorAll('input#playerNumber');
      expect(formElements[0].value).toEqual('0');
      expect(formElements.length).toEqual(1);
    });

    it('should contain card value input element with 0 default value', () => {
      const formElements = fixture.debugElement.nativeElement.querySelectorAll('input#cardValue');
      expect(formElements[0].value).toEqual('');
      expect(formElements.length).toEqual(1);
    });

    it('should contain 5 input elements', () => {
      const formElements = fixture.debugElement.nativeElement.querySelectorAll('input');
      expect(formElements.length).toEqual(5);
    });
  });

  describe('PlayerInfo Form Group', () => {
    it('should match default values', () => {
      const playerInfo : IPlayerCard = {
        ...initPlayerCard,
      };
      component.playerCardInfo = playerInfo;
      const formGroup = component.playerCardInfoForm;      
      expect(formGroup).not.toBeNull();
      expect(formGroup?.value).not.toBeNull();
      expect(formGroup?.value).toEqual(playerInfo);
    })
  });

  describe('First Name Form Feild', () => {
    beforeEach(() => {
      const playerInfo : IPlayerCard = {
        ...initPlayerCard,
      };
      component.playerCardInfo = playerInfo;
      const formGroup = component.playerCardInfoForm;      
      const fistNameFormControl = formGroup?.get('firstName');       
      expect(formGroup).toBeTruthy();
      expect(fistNameFormControl).toBeTruthy();
      
      const firstNameElm = fixture.debugElement.nativeElement.querySelector('input#firstName');
      firstNameElm.value = '';
      firstNameElm.dispatchEvent(new Event('input'));       
      fixture.detectChanges();

      expect(firstNameElm).toBeTruthy();
      expect(firstNameElm.value).toEqual(fistNameFormControl?.value);
      
    });

    it('should not allow empty value', () => {
      const formGroup = component.playerCardInfoForm;      
      const fistNameFormControl = formGroup?.get('firstName');        
      const firstNameErrorsElm = fixture.debugElement.nativeElement.querySelector('#firstNameErrors');
      
      expect(firstNameErrorsElm).not.toBeTruthy();
      expect(fistNameFormControl?.errors).toEqual({required: true});
      expect(fistNameFormControl?.valid).toBeFalsy();
    });

    it('should allow valid values', () => {
      const formGroup = component.playerCardInfoForm;      
      const fistNameFormControl = formGroup?.get('firstName');   
      const firstNameElm = fixture.debugElement.nativeElement.querySelector('input#firstName');
      const firstNameErrorsElm = fixture.debugElement.nativeElement.querySelector('#firstNameErrors');
      if(firstNameElm){      
        firstNameElm.value = 'test';
        firstNameElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();
        
        expect(firstNameErrorsElm).not.toBeTruthy();
        expect(fistNameFormControl?.errors).toBeNull();
        expect(fistNameFormControl?.valid).toBeTruthy();
      };
    });

    it('should not values with less than 2 length', () => {
      const formGroup = component.playerCardInfoForm;      
      const fistNameFormControl = formGroup?.get('firstName');   
      const firstNameElm = fixture.debugElement.nativeElement.querySelector('input#firstName');
     
      if(firstNameElm){      
        firstNameElm.value = 't';
        firstNameElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();            
        expect(fistNameFormControl?.errors?.minlength).toBeTruthy();
        expect(fistNameFormControl?.valid).toBeFalsy();
      };
    });
  });

  describe('Last Name Form Feild', () => {
    beforeEach(() => {
      const playerInfo : IPlayerCard = {
        ...initPlayerCard,
      };
      component.playerCardInfo = playerInfo;
      const formGroup = component.playerCardInfoForm;      
      const lastNameFormControl = formGroup?.get('lastName');       
      expect(formGroup).toBeTruthy();
      expect(lastNameFormControl).toBeTruthy();      
      const lastNameElm = fixture.debugElement.nativeElement.querySelector('input#firstName');    
      expect(lastNameElm).toBeTruthy();
      expect(lastNameElm.value).toEqual(lastNameFormControl?.value);
      
    });

    it('should not allow empty value', () => {
      const formGroup = component.playerCardInfoForm;      
      const lastNameFormControl = formGroup?.get('lastName');          
      const lasttNameErrorsElm = fixture.debugElement.nativeElement.querySelector('#lasttNameErrors');
      
      expect(lasttNameErrorsElm).not.toBeTruthy();
      expect(lastNameFormControl?.errors).toEqual({required: true});
      expect(lastNameFormControl?.valid).toBeFalsy();
    });

    it('should allow valid values', () => {
      const formGroup = component.playerCardInfoForm;      
      const lastNameFormControl = formGroup?.get('lastName');          
      const lasttNameErrorsElm = fixture.debugElement.nativeElement.querySelector('#lasttNameErrors');
      const lasttNameElm = fixture.debugElement.nativeElement.querySelector('input#lasttName');
    
      if(lasttNameElm){      
        lasttNameElm.value = 'test';
        lasttNameElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();
        
        expect(lasttNameErrorsElm).not.toBeTruthy();
        expect(lastNameFormControl?.errors).toBeNull();
        expect(lastNameFormControl?.valid).toBeTruthy();
      };
    });

    it('should not values with less than 2 length', () => {
      const formGroup = component.playerCardInfoForm;      
      const lastNameFormControl = formGroup?.get('lastName');         
      const lasttNameElm = fixture.debugElement.nativeElement.querySelector('input#lasttName');
     
      if(lasttNameElm){      
        lasttNameElm.value = 't';
        lasttNameElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();            
        expect(lastNameFormControl?.errors?.minlength).toBeTruthy();
        expect(lastNameFormControl?.valid).toBeFalsy();
      };
    });
  });

  describe('Player Number Form Feild', () => {
    beforeEach(() => {
      const playerInfo : IPlayerCard = {
        ...initPlayerCard,
      };
      component.playerCardInfo = playerInfo;
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('playerNumber');       
      expect(formGroup).toBeTruthy();
      expect(formControl).toBeTruthy();      
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#playerNumber');    
      expect(InputElm).toBeTruthy();
      expect(InputElm.value).toEqual(formControl?.value?.toString());
      
    });

    it('should not allow empty value', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('playerNumber');          
      const ErrorsElm = fixture.debugElement.nativeElement.querySelector('#playerNumberErrors');
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#playerNumber'); 

      InputElm.value = '';
      InputElm.dispatchEvent(new Event('input'));       
      fixture.detectChanges();

      expect(ErrorsElm).not.toBeTruthy();
      expect(formControl?.errors?.required).toBeTruthy();
      expect(formControl?.valid).toBeFalsy();
    });

    it('should allow valid values', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('playerNumber');          
      const ErrorsElm = fixture.debugElement.nativeElement.querySelector('#playerNumberErrors');
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#playerNumber'); 
    
      if(InputElm){      
        InputElm.value = 10;
        InputElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();
        
        expect(ErrorsElm).not.toBeTruthy();
        expect(formControl?.errors).toBeNull();
        expect(formControl?.valid).toBeTruthy();
      };
    });

    it('should not values with less than 0', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('playerNumber');         
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#playerNumber'); 
     
      if(InputElm){              
        InputElm.value = -2;
        InputElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();     

        expect(formControl?.errors?.inValidPlayerNumber).toBeTruthy();
        expect(formControl?.valid).toBeFalsy();
      };
    });
  });

  describe('Card value Form Feild', () => {
    beforeEach(() => {
      const playerInfo : IPlayerCard = {
        ...initPlayerCard,
      };
      component.playerCardInfo = playerInfo;
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('cardValue');       
      expect(formGroup).toBeTruthy();
      expect(formControl).toBeTruthy();      
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#cardValue');    
      expect(InputElm).toBeTruthy();
      expect(InputElm.value).toEqual('');
      
    });

    it('should allow empty value', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('cardValue');          
      const ErrorsElm = fixture.debugElement.nativeElement.querySelector('#cardValueErrors');
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#cardValue'); 

      InputElm.value = '';
      InputElm.dispatchEvent(new Event('input'));       
      fixture.detectChanges();
      
      
      expect(ErrorsElm).not.toBeTruthy();
      expect(formControl?.errors?.required).toBeFalsy();
      expect(formControl?.valid).toBeTruthy();
    });

    it('should allow valid values', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('cardValue');          
      const ErrorsElm = fixture.debugElement.nativeElement.querySelector('#cardValueErrors');
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#cardValue'); 
    
      if(InputElm){      
        InputElm.value = 10;
        InputElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();
        
        expect(ErrorsElm).not.toBeTruthy();
        expect(formControl?.errors).toBeNull();
        expect(formControl?.valid).toBeTruthy();
      };
    });

    it('should not values with less than 0', () => {
      const formGroup = component.playerCardInfoForm;      
      const formControl = formGroup?.get('cardValue');          
      const InputElm = fixture.debugElement.nativeElement.querySelector('input#cardValue'); 
     
      if(InputElm){              
        InputElm.value = -2;
        InputElm.dispatchEvent(new Event('input'));       
        fixture.detectChanges();     

        expect(formControl?.errors?.inValidPlayerNumber).toBeTruthy();
        expect(formControl?.valid).toBeFalsy();
      };
    });
  });
  

});
