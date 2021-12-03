import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-departments',
  templateUrl: './our-departments.component.html',
  styleUrls: ['./our-departments.component.css']
})
export class OurDepartmentsComponent implements OnInit {
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';
  cards = [
    {
      nombre: 'Bernardo Delgado Altamira',
      alt: 'Bernardo Delgado Altamira',
      puesto: 'Chief Executive Officer (CEO)',
      descripcion: 'Coordinate all the activities of the company, supervise the performance of the employees, establish the general objectives, in addition to ensuring that all these activities are carried out in an efficient, organized, safe and profitable manner.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/images/our-departments/direccion.png',
      correo: 'mailto:direccion@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'Rigoberto López Licea',
      alt: 'Rigoberto López Licea',
      puesto: 'Chief Operating Officer (COO)',
      descripcion: "Plan, direct and ensure the proper management of the company's resources, in order to achieve the goals set, ensuring that the company is more productive.",
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/images/our-departments/operacion.png',
      correo: 'mailto:operaciones@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'Berenice Mendoza Heredia',
      alt: 'Berenice Mendoza Heredia',
      puesto: 'Production manager',
      descripcion: 'The production department is committed to producing authentic and traditional products according to approved quality levels.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/images/our-departments/produccion.png',
      correo: 'mailto:produccion@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'Mariana Monserrat Razo Nieves',
      alt: 'Mariana Monserrat Razo Nieves',
      puesto: 'Quality manager',
      descripcion: 'The quality department is committed to maintaining all the high standards in the production process, always taking care of the Quality and Safety of our products.',
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/images/our-departments/calidad.png',
      correo: 'mailto:calidad@robemex.com',
      tel: 'tel: +524433200368'
    },
    {
      nombre: 'Jorge Alejandro Sánchez González',
      alt: 'Jorge Alejandro Sánchez González',
      puesto: 'Chief Marketing Officer (CMO)',
      descripcion: "Our goal is to introduce you to Carmelita’s Eggnog with the utmost honesty, using the most up-to-date digital platforms. Reach global territories.",
      botonCorreo: 'Correo',
      botonTelefono: 'Teléfono',
      img: '../../../assets/images/our-departments/marketing.png',
      correo: 'mailto:marketing@robemex.com',
      tel: 'tel: +524433200368'
    }
  ];
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor() { }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

}
