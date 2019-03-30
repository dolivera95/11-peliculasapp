import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  peliculas:any[] = [];
  textoBuscar:string;

  constructor(private _ps:PeliculasService, private _ar:ActivatedRoute) {
    this._ar.params.subscribe(params =>{
      if(params['texto']){
        this.textoBuscar = params['texto'];
        this.buscarPelicula(this.textoBuscar);
      }
    })
  }

  ngOnInit() {
  }

  buscarPelicula(texto:string){
    if (texto){
      this._ps.buscarPelicula(texto)
      .subscribe( (data:any)=>{
        if (data){
          console.log(data);
          this.peliculas = data;
        }
      })
    }else{
      return;
    }
  }

}
