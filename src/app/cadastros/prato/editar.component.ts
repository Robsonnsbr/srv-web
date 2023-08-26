import { Component, OnInit } from '@angular/core';
import { PratoService } from 'src/app/services/prato.service';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { Prato } from 'src/app/models/prato.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class PratoEditarComponent implements OnInit {
  
  produtos: Produto[] = [];
  prato : Prato = new Prato();

  URL_SERVIDOR_UPLOAD_FOTO : string = "http://localhost:3000/fotos/";

  ngOnInit(): void {
     this.pratoService.carregar().subscribe( prato => {
      this.prato = prato;
    });

    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
     });
  }

  constructor(private pratoService: PratoService,
    private produtoService: ProdutoService) {}

  recarregarPrato(){
    this.produtos.forEach((produto) => {
      if (produto.codigo === this.prato.produto.codigo){
        this.prato.produto = produto;
      }     
    });
  }

  atualizarPrato() {
    this.pratoService.atualizar(this.prato.codigo, this.prato).subscribe(() => {
        alert('Prato alterado!');
    });
  }
}
