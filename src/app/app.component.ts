import { Component,OnInit} from '@angular/core';
import {VideosService} from './video.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[VideosService]
})
export class AppComponent implements OnInit{
  title = 'Laureates YouTube Search';
  videos = [];
  onsubmit(value: any){
    console.log(value.search_value);
  }
  constructor(private _videosService: VideosService){}
  ngOnInit(){
   /*this._videosService.getVideos()
   .subscribe(resVideosData => this.videos = resVideosData); 
  }*/
    this.videos = this._videosService.getVideos();
    //console.log(this.videos);
  }
}
