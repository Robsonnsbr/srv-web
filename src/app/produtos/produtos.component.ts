import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  itensDoCarrinho: Observable<Produto[]> = new Observable<Produto[]>();
  URL_SERVIDOR_UPLOAD_FOTO: string = 'http://localhost:3000/fotos/';
  filter: string = '';

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

  filtrarPorAtributos() {
    console.log('entrei aqui');
    console.log(this.filter);

    this.itensDoCarrinho = this.produtoService
      .listar()
      .pipe(
        map((produtos: Produto[]) =>
          produtos.filter(
            (produto: Produto) =>
              produto.nome.toLowerCase().includes(this.filter.toLowerCase()) ||
              produto.descricao
                .toLowerCase()
                .includes(this.filter.toLowerCase())
          )
        )
      );
  }
}
