import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

//Routes
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import {PeliculasService} from './services/peliculas.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { GalleryComponent } from './components/gallery/gallery.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { YoutubeVideoComponent } from './components/youtube-video/youtube-video.component';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    LoadingComponent,
    PeliculaImagenPipe,
    GalleryComponent,
    PeliculaComponent,
    YoutubeVideoComponent,
    DomSeguroPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    APP_ROUTING
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
