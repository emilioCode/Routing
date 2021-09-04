import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/Photo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private routes: ActivatedRoute) { }
  
  photo:Photo = {
    id:undefined,
    albumId:undefined,
    title:undefined,
    thumbnailUrl:undefined,
    url:undefined
  };
  show:boolean= false;
  ngOnInit(): void {
    this.routes.params.subscribe(parameters=>{
      try{
        this.photo = this.getStrinifyParse(parameters['object']);
      
        console.log(this.photo)
        this.show = true;
      }catch{
        this.show = false;
      }

    })
  }

  getStrinifyParse(value:any):any{
    return JSON.parse(value);
  }

}
