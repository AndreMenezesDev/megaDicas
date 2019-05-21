import { Component } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { AngularDelegate, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController){}

  objeto: any={};

  bd = ["01","02","03","05","04","09"];
  frequencia: number = 0;
  indice: number=0;
  freq: any [];

  async templateAlerta(objeto: any){
    var alert = await this.alertController.create({
      header: 'Sua Chance!',
      subHeader: 'Resultado',
      message: 'você tem '+objeto.result+" de ganhar.",
      buttons: ['OK']

    })

    alert.present();
  }

  verificarJogoMais(){
   

    this.frequencia = this.indice = 0;
    this.freq = [];

    

     var jogo = this.objeto.codigo.split("-");

     jogo.forEach((element: string) => {
       this.bd.forEach(banco => {
         if (element == banco){
            this.frequencia++;
         }
       },this);
       
       if (this.frequencia != this.indice){
          this.freq.push(this.frequencia);
          this.indice = this.frequencia;
       }
     },this);

     var chance = (this.freq.length / this.bd.length)*100;
     

     this.objeto.result = (<string>(chance).toFixed(2)+ "%");

     this.templateAlerta(this.objeto);
  }

  verificarJogoMenos(){
   

    this.frequencia = this.indice = 0;
    this.freq = [];

    

     var jogo = this.objeto.codigo.split("-");

     jogo.forEach((element: string) => {
       this.bd.forEach(banco => {
         if (element != banco){
            this.frequencia++;
         }
       },this);
       
       if (this.frequencia != this.indice){
          this.freq.push(this.frequencia);
          this.indice = this.frequencia;
       }
     },this);

     var chance = (this.freq.length / this.bd.length)*100;
     

     this.objeto.result = (<string>(chance).toFixed(2)+ "%");

     this.templateAlerta(this.objeto);
  }

}
