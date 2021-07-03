import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
  `],
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Juan',
    favoritos: [
      { id: 1, nombre: 'Metal Gear'},
      { id: 2, nombre: 'DeathStrading'}
    ]
  }

  guardar() {
    console.log('Formulario Posteado...');
  }

  eliminar( index: number ) {
    console.log('Borrando...')
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    // nuevo objeto, con spread ...
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
