import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
    heroeBorrado: string | undefined | '' = '';
    heroes: string[] = ['Goku', 'Spiderman', 'Hulk', 'Thor', 'Capitan America'];

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
