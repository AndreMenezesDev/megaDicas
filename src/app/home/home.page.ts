import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  objeto: any={};


  verificarJogo(){

    var jogo = <string>this.objeto.codigo.split("-");

    
  }

}
