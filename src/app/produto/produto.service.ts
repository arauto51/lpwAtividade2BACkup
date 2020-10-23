import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


private urlLocalidades = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.7386/dados?formato=json';

  constructor(private http: HttpClient) { }

consultaUFs(){


  return this.http.get(this.urlLocalidades);
}

}
