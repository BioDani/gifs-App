import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})

export class SidebarComponent {

  get historial(){
    return this.gifsService.historial.splice(0,5);
  }

  constructor(private gifsService: GifsService){}
}
