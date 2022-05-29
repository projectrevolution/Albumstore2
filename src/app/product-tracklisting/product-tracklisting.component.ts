import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe((response: Album) => {
      this.albumInfo = response;
      console.log(this.albumInfo.album.tracks);

    })
  }

}
