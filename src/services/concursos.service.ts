import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toplistmodel } from 'src/model/toplistmodel.model';

@Injectable({
  providedIn: 'root'
})
export class ConcursosService {

  apiUrl = 'http://localhost:9091/resultados'
  apiUrlTop = 'http://localhost:9091/selecaotop'

  constructor(private httpCliente: HttpClient) { }

  ultimoSorteio(){
    return this.httpCliente.get(this.apiUrl);
  }

  top10Mais(){
    return this.httpCliente.get<Toplistmodel>(this.apiUrlTop);
  }

}
