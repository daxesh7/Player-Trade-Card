import { TestBed } from '@angular/core/testing';

import { UtilService } from './util.service';

describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('IsNullOrEmpty', () => {
    const utilService = new UtilService();
    it('Check for null value' , () => {
      const value : boolean = utilService.isNullOrEmpty(null);
      expect(value).toBeTruthy();
    });
    it('Check for empty string' , () => {
      const value : boolean = utilService.isNullOrEmpty('');
      expect(value).toBeTruthy();
    });
    it('Check for long string' , () => {
      const value : boolean = utilService.isNullOrEmpty('test');
      expect(value).toBeFalsy();
    });
  });

  describe('Is Number', () => {
    const utilService = new UtilService();
    it('Check for empty string' , () => {
      const value : boolean = utilService.isNumber('');
      expect(value).toBeTruthy();
    });
    it('Check for negative number' , () => {
      const value : boolean = utilService.isNumber('-1');
      expect(value).toBeTruthy();
    });
    it('Check for valid number' , () => {
      const value : boolean = utilService.isNumber(123);
      expect(value).toBeTruthy();
    });
  });

  describe('Compare With No CaseSensitive', () => {
    const utilService = new UtilService();
    it('Check for empty string' , () => {
      const value : boolean = utilService.compareWithNoCaseSensitive('' , '');
      expect(value).toBeTruthy();
    });
    it('Check for valid string' , () => {
      const value : boolean = utilService.compareWithNoCaseSensitive('test' , 'Test');
      expect(value).toBeTruthy();
    });
    it('Check for in valid string' , () => {
      const value : boolean = utilService.compareWithNoCaseSensitive('test1' , 'Test');
      expect(value).toBeFalsy();
    });
  });


});
