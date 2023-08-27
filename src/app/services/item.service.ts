import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  url = 'http://localhost:3000/item';

  constructor(protected http: HttpClient) {}

  carregar(): Observable<Item> {
    console.log('entrei aqui');
    let response = this.http.get<Item>(this.url);
    return response;
  }

  atualizar(codigo: number, item: Item): Observable<Item> {
    const path = `${this.url}/${codigo}`;
    return this.http.put<Item>(path, item);
  }
}
