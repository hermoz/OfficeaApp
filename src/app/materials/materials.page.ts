import { Component, OnInit } from '@angular/core';
import { MaterialsService } from '../materials.service';
import { Material } from '../models/material.model';

// añadimos tambiçen router y ionItemSliding
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.page.html',
  styleUrls: ['./materials.page.scss'],
})
export class MaterialsPage implements OnInit {

  /**
   * material.model.ts tenemos la clase Material
   */
  public loadedMaterials: Material[];

  // MaterialService tiene todas las funcionalidades de nuestros materiales y como interactuaremos con ellos
  constructor(private materialSrvc: MaterialsService, private router: Router) { }
  /**
   * Accedemos a nuestro servicio y a materials que es un get, un observable. Nos 
   * suscribimos y nos devuelve una lista de materiales que almacenaremos en nuestra variable loadedMaterials
   */
  ngOnInit() {
    this.materialSrvc.materials.subscribe(materials =>{
      this.loadedMaterials = materials;
    });
  }

  // Editamos método para acceder a la página con el formulario creado de edición de materiales
  onEditOffer(materialId: string, slidingItem: IonItemSliding){
    this.router.navigate(['/', 'materials', 'edit', materialId]);
    slidingItem.close();
  }

}
