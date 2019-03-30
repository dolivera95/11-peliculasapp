import { Component, OnInit } from '@angular/core';
import {PeliculasService} from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  populares:any[] = [];
  cartelera:any[] = [];
  kids:any[] = [];

  constructor(private _ps:PeliculasService) {
    this._ps.getPopulares()
        .subscribe( (data:any) =>{
          this.populares = data;
        });

    this._ps.getCartelera()
        .subscribe( (data:any) =>{
          this.cartelera = data;
          console.log(this.cartelera)
        })

    this._ps.getKidsMovies()
        .subscribe( (data:any) =>{
          this.kids = data;
        })

  }

  ngOnInit() {
  }

}
