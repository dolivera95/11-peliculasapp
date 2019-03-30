import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeliculasService} from '../../services/peliculas.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula:any = {};
  urlTrailer:string;

  constructor( private _router: ActivatedRoute, private _ps:PeliculasService, private _location: Location) {
    this._router.params.subscribe(params =>{
      this.getPelicula(params['id']);
      this.getTrailer(params['id']);
    });

  }

  ngOnInit() {
  }

  backClicked(){
    this._location.back();
  }

  getPelicula(id:string){
    this._ps.getPelicula(id)
        .subscribe( pelicula => {
          this.pelicula = pelicula
          console.log(pelicula)
        })
  };

  getTrailer(id:string){
    this._ps.getTrailer(id)
        .subscribe( (trailer:any) =>{
          if (trailer){
            this.urlTrailer = trailer;
          }else{
            this.urlTrailer = "";
          }
          console.log(this.urlTrailer);
        })
  }

}
