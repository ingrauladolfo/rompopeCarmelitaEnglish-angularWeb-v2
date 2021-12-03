import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarmelitasRecipesService } from 'src/app/services/carmelitas-recipes.service';

@Component({
  selector: 'app-carmelitas-recipes-gallery',
  templateUrl: './carmelitas-recipes-gallery.component.html',
  styleUrls: ['./carmelitas-recipes-gallery.component.css']
})
export class CarmelitasRecipesGalleryComponent implements OnInit {
  recetas: any = {};
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: CarmelitasRecipesService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.recetas = this._servicio.obtenerUno(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
