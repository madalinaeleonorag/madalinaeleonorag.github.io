import { TestBed } from '@angular/core/testing';

import { ExternalServices } from './external-services';

describe('ExternalServices', () => {
  let service: ExternalServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
