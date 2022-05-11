import { TestBed } from '@angular/core/testing';

import { DashShopApiService } from './dash-shop-api.service';

describe('DashShopApiService', () => {
  let service: DashShopApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashShopApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
