import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Images } from './Images.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit{
  
  @HostBinding('attr.class') cssclass = 'row'

  @Input() imageURL :Images 

  isHovered = false;
  
  constructor(){

    this.imageURL = new Images ("title","imageURL", 0); Images;
  }

  onCardHover(){
    this.isHovered = true;

  }

  onCardLeave(){
    this.isHovered = false
  }
  ngOnInit(): void {
    
  }

}
