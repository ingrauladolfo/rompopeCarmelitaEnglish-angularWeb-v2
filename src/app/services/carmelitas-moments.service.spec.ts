import { TestBed } from '@angular/core/testing';

import { CarmelitasMomentsService } from './carmelitas-moments.service';

describe('CarmelitasMomentsService', () => {
  let service: CarmelitasMomentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmelitasMomentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
