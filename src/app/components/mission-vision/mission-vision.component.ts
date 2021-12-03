import { Component, OnInit } from '@angular/core';
import { MissionvisionphilosophyService } from 'src/app/services/missionvisionphilosophy.service';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-mission-vision',
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.css']
})
export class MissionVisionComponent implements OnInit {
  valores: any[] = [];
  politica: any[] = [];
  constructor(
    private _servicio: ValuesService,
    private _service: MissionvisionphilosophyService
    ) {
    this.valores = _servicio.obtenerValor();
    this.politica = _service.obtenerPolitica();
   }
  ngOnInit(): void {
  }

}
