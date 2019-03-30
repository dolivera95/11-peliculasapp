import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

//Map
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apikey:string = "apikey";
  private urlMoviedb:string = "https://api.themoviedb.org/3";
  private callback:string = 'callback=JSONP_CALLBACK'

  peliculas:any[] = [];

  hoy: Date;
  proxSemana:Date;
  inicio:string = "";
  final:string = "";


  constructor( private _http:HttpClient ) {
    this.hoy = new Date()
    this.inicio = `${this.hoy.getFullYear()}-${this.hoy.getMonth()+1}-${this.hoy.getDate()}`;
    this.proxSemana = new Date(this.hoy.getFullYear(), this.hoy.getMonth()+1, this.hoy.getDate()+7);
    this.final = `${this.proxSemana.getFullYear()}-${this.proxSemana.getMonth()}-${this.proxSemana.getDate()}`;
  }


  getPopulares(){
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`; // &callback=JSONP_CALLBACK
    return this._http.jsonp(url, this.callback).pipe(
              map( (res:any) =>{
                return res.results;
              })
    )
  };

  getCartelera(){
    let url= `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${this.inicio}&primary_release_date.lte=${this.final}&api_key=${this.apikey}&language=es`
    return this._http.jsonp(url, this.callback).pipe(
              map( (res:any)=>{
                return res.results;
              })
    )
  }

  getKidsMovies(){
    let url = `${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;
    return this._http.jsonp(url, this.callback).pipe(
              map(  (res:any)=>{
                return res.results;
              })
    )
  }

  getPelicula(id:string){
    let url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es`;
    return this._http.jsonp(url, this.callback).pipe(
            map((res:any)=>{
              return res;
            })
    )
  }

  getTrailer(id:any){
    console.log(id);
    let url = `${this.urlMoviedb}/movie/${id}/videos?api_key=${this.apikey}&language=es`;
    return this._http.jsonp(url, this.callback).pipe(
          map((res:any)=>{
            if (res['results']['0']){
              return res['results']['0'].key;
            }else{
              return null;
            }
          })
    )
  }

  buscarPelicula(texto:string){
    let url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&language=es&query=${texto}&page=1&include_adult=false`;

    return this._http.jsonp(url, this.callback).pipe(
            map((res)=>{
              this.peliculas = res['results'];
              return res['results'];
            })
    )
  }





}
