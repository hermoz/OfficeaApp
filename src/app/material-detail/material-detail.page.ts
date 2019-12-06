import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import { MaterialsService } from '../materials.service';
import { NavController } from '@ionic/angular';
import { Material } from '../models/material.model';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.page.html',
  styleUrls: ['./material-detail.page.scss'],
})

export class MaterialDetailPage implements OnInit {

  public loadedMaterial: Material;

  constructor(private materialSrvc: MaterialsService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      /**
       * Controlamos el error donde si no se ha pasado el material pondremos un navcontroler,
       * si no se encuentra el materialID hacemos un return y nos devuelve a nuestra página principal
       */
      if(!paramMap.has('materialId')){
        this.navCtrl.navigateBack('/materials');
        return;
      }
      this.materialSrvc.getMaterial(paramMap.get('materialId')).subscribe(material => {
        //y guardamos el resultado en la variable
        this.loadedMaterial = material;
      });
    });
  }

}
