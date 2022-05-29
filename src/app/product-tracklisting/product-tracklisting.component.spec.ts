import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductTracklistingComponent } from './product-tracklisting.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ProductTracklistingComponent', () => {
  let component: ProductTracklistingComponent;
  let fixture: ComponentFixture<ProductTracklistingComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklistingComponent ],
      imports: [HttpClientModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
     fixture = TestBed.createComponent(ProductTracklistingComponent);
     component = fixture.debugElement.componentInstance
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
