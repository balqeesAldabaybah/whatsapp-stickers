import { TestBed } from '@angular/core/testing';

import { StickersService } from './stickers.service';

describe('StickersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StickersService = TestBed.get(StickersService);
    expect(service).toBeTruthy();
  });
});
