import { Component, OnInit} from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { ProdutoService } from 'src/app/services/produto.service';
import { PratoService } from 'src/app/services/prato.service';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  produto: Produto = {foto:'semfoto.png'} as Produto;

  URL_SERVIDOR_UPLOAD_FOTO : string = "http://localhost:3000/fotos/";

  constructor(private pratoService: PratoService,
    private carrinhoService: CarrinhoService, 
    private produtoService : ProdutoService) {
  }

  ngOnInit(): void {
    this.pratoService.carregar().subscribe( prato => {
      prato.produto.quantidade = 1;
      this.produto = prato.produto;
    });
  }

  atualizarItem(produto: Produto) {
    this.carrinhoService.atualizarItem(produto);
  }
}