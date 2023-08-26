import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Prato } from '../models/prato.model';

@Injectable({
  providedIn: 'root'
})
export class PratoService {

  url = "http://localhost:3000/prato";

  constructor(protected http: HttpClient) { }

  carregar() : Observable<Prato> {
    let response = this.http.get<Prato>(this.url);
    return response;
  }

  atualizar(codigo: number, prato: Prato) : Observable<Prato> {
    const path = `${this.url}/${codigo}`;
    return this.http.put<Prato>(path, prato);
  }
}