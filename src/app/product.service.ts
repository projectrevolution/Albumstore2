import { Product } from 'src/app/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Album } from 'src/app/album';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';
  private _productUrl = '../assets/products.json';

  constructor(private _http: HttpClient) { }


  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(map((response) => response as Album ));
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productUrl).pipe(map((response) => response as any));
  }
}
