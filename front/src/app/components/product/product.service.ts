import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, ObservableLike } from 'rxjs';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
  //Retorna observable se definifir <product> no return idem.
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }
}
