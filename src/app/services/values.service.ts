import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {
  valores: any = [
    {
      ruta: '../../../assets/images/our-values/equidad.png',
      nombre: 'Equity',
      alt: 'Equity',
      valor: 'Equity'
    },
    {
      ruta: '../../../assets/images/our-values/honestidad.png',
      nombre: 'Honesty',
      alt: 'Honesty',
      valor: 'Honesty'
    },
    {
      ruta: '../../../assets/images/our-values/justicia.png',
      nombre: 'Justice',
      alt: 'Justice',
      valor: 'Justice'
    },
    {
      ruta: '../../../assets/images/our-values/servicio.png',
      nombre: 'Service',
      alt: 'Service',
      valor: 'Service'
    },
    {
      ruta: '../../../assets/images/our-values/unidad.png',
      nombre: 'Unity',
      alt: 'Unity',
      valor: 'Unity'
    },
    {
      ruta: '../../../assets/images/our-values/verdad.png',
      nombre: 'Truth',
      alt: 'Truth',
      valor: 'Truth'
    }
  ]
  constructor() { }
  // tslint:disable-next-line:typedef
  obtenerValor(){
    return this.valores;
  }
}
