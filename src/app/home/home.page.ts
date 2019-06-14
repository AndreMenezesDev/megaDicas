import { Component } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { ConcursosService } from 'src/services/concursos.service';
import { Toplistmodel } from 'src/model/toplistmodel.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  bd: any={};
  objeto: any={};

  frequencia: number = 0;
  indice: number=0;
  freq: any [];
  toplist: any;
  showTopListMais: boolean = false;
  showTopListMenos: boolean = false;

  constructor(
    public alertController: AlertController,
    private concursosService: ConcursosService    
    ){         

    }

    ngOnInit(): void {
      this.concursosService.ultimoSorteio().subscribe((result: any) => {
        
        this.bd.data = new Date(result.data).toLocaleDateString('pt-BR',{timeZone:'UTC'});
        this.bd.jogo = result.bola01+"-"+result.bola02+"-"+result.bola03+"-"+
                       result.bola04+"-"+result.bola05+"-"+result.bola06;        
      });

      
    }

  loadData(event){
    setTimeout(() => {
      console.log('Done');
      this.toplist = [{"valor":10},{"valor":20},{"valor":30},{"valor":40}];
      event.target.complet();

      if (this.toplist.length == 1000){
        event.target.disable = true;
      }
    },500)
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

  topMais(){ 
    
    this.concursosService.top10Mais().subscribe((result: Toplistmodel) => {
      this.toplist = result;

    });

    this.showTopListMais = !this.showTopListMais;
  }

  verificarJogoMenos(){
   

    this.showTopListMenos = !this.showTopListMenos;
  }

}
