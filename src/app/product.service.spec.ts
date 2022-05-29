import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
   await TestBed.configureTestingModule({
     imports: [HttpClientModule]
   });
    service = TestBed.inject(ProductService)
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
