import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { DateformatterService } from '../dateformatter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employe:any
  formatDate:any
  constructor(private api:BackendService, private datenow:DateformatterService){}

  ngOnInit(){
    this.getData()
    this.getDate()
  }

  getData(){
    this.api.getemp().subscribe((res:any)=>{
      console.log(res)
      this.employe=res
    })
  }

  getDate(){
    let date = new Date()
    console.log(date)
    this.formatDate=this.datenow.formatDate(date)
  }

}
