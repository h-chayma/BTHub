import { TestBed } from '@angular/core/testing';

import { BTHubService } from './bthub.service';

describe('BTHubService', () => {
  let service: BTHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BTHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
