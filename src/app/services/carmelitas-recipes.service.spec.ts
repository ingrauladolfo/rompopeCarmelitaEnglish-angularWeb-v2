import { TestBed } from '@angular/core/testing';

import { CarmelitasRecipesService } from './carmelitas-recipes.service';

describe('CarmelitasRecipesService', () => {
  let service: CarmelitasRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarmelitasRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
