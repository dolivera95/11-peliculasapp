import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {
  @Input() urlTrailer:any;


  constructor() {
  }

  ngOnInit() {
  }


}
