import { Component, OnInit } from '@angular/core';
import { ConcursosService } from 'src/services/concursos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  objeto: any;
 
  constructor(
    public alertController: AlertController,
    private concursosService: ConcursosService  
  ) {
  }

  ngOnInit() {    
  }
  

  analisarJogo(){
   
    var jogo = this.objeto.codigo.split("-");

    this.concursosService.top10Mais().subscribe((result: any) => {        
            
      });


  }

  async templateAlerta(objeto: any){
    var alert = await this.alertController.create({
      header: 'Sua Chance!',
      subHeader: 'Resultado',
      message: 'você tem '+objeto.result+" de ganhar.",
      buttons: ['OK']

    })

    alert.present();
  }


}
