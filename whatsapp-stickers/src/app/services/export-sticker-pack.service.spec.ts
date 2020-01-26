import { TestBed } from '@angular/core/testing';

import { ExportStickerPackService } from './export-sticker-pack.service';

describe('ExportStickerPackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportStickerPackService = TestBed.get(ExportStickerPackService);
    expect(service).toBeTruthy();
  });
});
