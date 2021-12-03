import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarmelitasRecipesService } from 'src/app/services/carmelitas-recipes.service';

@Component({
  selector: 'app-carmelitas-cookinbook',
  templateUrl: './carmelitas-cookinbook.component.html',
  styleUrls: ['./carmelitas-cookinbook.component.css']
})
export class CarmelitasCookinbookComponent implements OnInit {

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
