import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 
  mostrar ;
  num=0;
  

  constructor(private produtoservice : ProdutoService) {}
  localidades: Observable<any>;
  
  ngOnInit(): void {
    this.mostrar = true;
    this.num = this.num;
    
      
      this.localidades = this.produtoservice.consultaUFs();
    
  }
      exibir() {
        this.mostrar = false;

      }
}
