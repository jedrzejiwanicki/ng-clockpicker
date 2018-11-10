import { TestBed } from '@angular/core/testing';

import { DynamicComponentsService } from './dynamic-components.service';

describe('DynamicComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicComponentsService = TestBed.get(DynamicComponentsService);
    expect(service).toBeTruthy();
  });
});
