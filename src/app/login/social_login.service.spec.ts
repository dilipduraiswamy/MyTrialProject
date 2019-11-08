/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Social_loginService } from './social_login.service';

describe('Service: Social_login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Social_loginService]
    });
  });

  it('should ...', inject([Social_loginService], (service: Social_loginService) => {
    expect(service).toBeTruthy();
  }));
});
