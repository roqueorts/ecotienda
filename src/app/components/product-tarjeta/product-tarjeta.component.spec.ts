import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTarjetaComponent } from './product-tarjeta.component';

describe('ProductTarjetaComponent', () => {
  let component: ProductTarjetaComponent;
  let fixture: ComponentFixture<ProductTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
