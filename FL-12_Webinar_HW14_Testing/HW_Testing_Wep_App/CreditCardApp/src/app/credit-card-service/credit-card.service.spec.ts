import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });
  it('should call the testCreditCard method', async () => {
    spyOn(service, 'testCreditCard');
    expect(service.testCreditCard).toHaveBeenCalledTimes(0);
  })
  it('it should be valid format',async () => {
    let result = service.testCreditCard('6334000000000004','Solo');
    expect(result.isValid).toBeTruthy();
    expect(result.message).toBe('Credit card has a valid format');
  })
  it('it should be unknown card type', async () => {
    let result = service.testCreditCard('5500000000000004','American Express');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Unknown card type');
  })
  it('it should by invalid number', async () => {
    let result = service.testCreditCard('440000000000009', 'jcb');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Credit card number is invalid');
  })
  it('it should by invalid number format', async () => {
    let result = service.testCreditCard('440000000000009n', 'jcb');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Credit card number is in invalid format');
  })
  it('it should by scam card number', async () => {
    let result = service.testCreditCard('5490997771092064', 'Mastercard');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Warning! This credit card number is associated with a scam attempt');
  })
  it('it should by  card number', async () => {
    let result = service.testCreditCard('5490997771092064', 'Mastercard');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Warning! This credit card number is associated with a scam attempt');
  })
  it('it should by invalid lenght', async () => {
    let result = service.testCreditCard('4111111111111222222', 'Visa');
    expect(result.isValid).toBeFalse();
    expect(result.message).toBe('Credit card number has an inappropriate number of digits');
  })
});
