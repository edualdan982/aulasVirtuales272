import { TestBed } from '@angular/core/testing';

import { Lesson.ServiceService } from './lesson.service.service';

describe('Lesson.ServiceService', () => {
  let service: Lesson.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lesson.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
