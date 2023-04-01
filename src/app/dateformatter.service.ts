import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateformatterService {

  constructor() { }
  formatDate(date:any){

    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()

    let today = `${day}/${month}/${year}`

    return today
  }
}
