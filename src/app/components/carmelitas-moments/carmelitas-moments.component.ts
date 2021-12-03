import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarmelitasMomentsService } from 'src/app/services/carmelitas-moments.service';

@Component({
  selector: 'app-carmelitas-moments',
  templateUrl: './carmelitas-moments.component.html',
  styleUrls: ['./carmelitas-moments.component.css']
})
export class CarmelitasMomentsComponent implements OnInit {
  momentos: any[] = [];
  constructor(
    private ruta: ActivatedRoute,
    private _servicio: CarmelitasMomentsService,
  ) {
    this.ruta.params.subscribe(params=>{
      this.momentos = this._servicio.obtenerMomento();
    });
  }

  ngOnInit(): void {
  }

}
