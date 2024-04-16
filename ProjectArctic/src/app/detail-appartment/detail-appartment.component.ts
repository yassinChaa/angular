import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-appartment',
  templateUrl: './detail-appartment.component.html',
  styleUrls: ['./detail-appartment.component.css']
})
export class DetailAppartmentComponent {
  id!:number
  constructor(private act : ActivatedRoute){}
    ngOnInit(){
      this.id=this.act.snapshot.params['id']
    }
}
