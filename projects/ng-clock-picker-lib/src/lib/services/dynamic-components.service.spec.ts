import { TestBed, async } from '@angular/core/testing';

import { DynamicComponentsService } from './dynamic-components.service';

describe('DynamicComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [DynamicComponentsService] }));

  it('should be created', async(() => {
    const service: DynamicComponentsService = TestBed.get(DynamicComponentsService);
    expect(service).toBeTruthy();
  }));
});
