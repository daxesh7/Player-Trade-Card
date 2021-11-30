import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  isNullOrEmpty(value : string | null) : boolean {
    return !value || value === '';
  }

  isNaN(value : string | number) : boolean {
    return isNaN(Number(value)) ? true : false
  }

  compareWithNoCaseSensitive(value1 : string | number , value2 : string | number) : boolean {
    return value1.toString().trim().toLowerCase() === value2.toString().trim().toLowerCase();
  }

  

}
