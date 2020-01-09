import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

import {IProduct} from './product';
import {ProductService} from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
    this.pageTitle = `: ${param}`;

  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  private getProduct(id: number) {
    this.service.getProduct(id).subscribe({
      next: product => {
        this.product = product;
      },
      error(err) {
        this.errorMessage = err;
      }
    });
  }
}
