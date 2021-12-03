import { TestBed } from '@angular/core/testing';

import { MissionvisionphilosophyService } from './missionvisionphilosophy.service';

describe('MissionvisionphilosophyService', () => {
  let service: MissionvisionphilosophyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionvisionphilosophyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
