import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarmelitasMomentsService } from 'src/app/services/carmelitas-moments.service';

@Component({
  selector: 'app-carmelitas-moments-gallery',
  templateUrl: './carmelitas-moments-gallery.component.html',
  styleUrls: ['./carmelitas-moments-gallery.component.css']
})
export class CarmelitasMomentsGalleryComponent implements OnInit {

  momentos: any = {};
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: CarmelitasMomentsService
  ) { 
    this.ruta.params.subscribe(params=>{
      this.momentos = this._servicio.obtenerVistaMomento(params['id']);
    });
  }

  ngOnInit(): void {
  }

}
