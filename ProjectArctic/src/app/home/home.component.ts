import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = "Hello 4ARCTIC3"
  //color:string ="red";
  color!:string;
  affich(){alert("hello")}
}
