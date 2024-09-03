import { TestBed } from '@angular/core/testing';

import { PostsLoaderServiceService } from './posts-loader-service.service';

describe('PostsLoaderServiceService', () => {
  let service: PostsLoaderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsLoaderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
