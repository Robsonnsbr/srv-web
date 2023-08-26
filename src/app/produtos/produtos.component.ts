import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  itensDoCarrinho: Observable<Produto[]> = new Observable<Produto[]>();
  URL_SERVIDOR_UPLOAD_FOTO: string = 'http://localhost:3000/fotos/';

  constructor(
    private carrinhoService: CarrinhoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.itensDoCarrinho = this.produtoService.listar();
  }

  adicionarAoCarrinho(produto: Produto) {
    this.carrinhoService.incrementarUmItem(produto);
  }
}
