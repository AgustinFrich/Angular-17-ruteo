import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { encuestaGuard } from './encuesta.guard';

describe('encuestaGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => encuestaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
