import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionvisionphilosophyService {

  politica: any = [
    {
      img:'../../assets/images/mission-vision/mision.png',
      alt: `Carmelita's Mission`,
      tipo:'Mission',
      descripcion:`Prepare the best Rompope and other drinks with typical Mexican flavors, with the highest quality and in an artisanal way, contributing at all times to rescue the values of the family and healthy coexistence through these drinks`
    },
    {
      img:'../../assets/images/mission-vision/vision.png',
      alt: `Carmelita's Vision`,
      tipo:'Vision',
      descripcion:`To be the number one company in the world in the elaboration and commercialization of Rompopes and Liquors with traditional Mexican flavors`
    },
    {
      img:'../../assets/images/mission-vision/filosofia.png',
      alt: `Carmelita's Philosophy`,
      tipo:'Philosophy',
      descripcion:`Seek to be a means for families to come together`,
    },
    
  ]
  constructor() { }
  obtenerPolitica(){
    return this.politica;
  }
}
