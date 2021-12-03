import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarmelitasRecipesService } from 'src/app/services/carmelitas-recipes.service';

@Component({
  selector: 'app-carmelitas-recipes',
  templateUrl: './carmelitas-recipes.component.html',
  styleUrls: ['./carmelitas-recipes.component.css']
})
export class CarmelitasRecipesComponent implements OnInit {
  recetas: any[] = [];
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: CarmelitasRecipesService,
  ) {
    this.ruta.params.subscribe(params=>{
      this.recetas = this._servicio.obtenerReceta();
    });
  }

  ngOnInit(): void {
  }

}
