import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-bind-ex2',
  templateUrl: './ev-bind-ex2.component.html',
  styleUrls: ['./ev-bind-ex2.component.css']
})
export class EvBindEx2Component implements OnInit {

  constructor() { }
  isavailable = true
  months = ["jan", "feb", "mar", "apr", "may", "jun", "july","aug",
  "sept", "oct", "nov", "dec"]
check = true

ngOnInit(): void {
}

change( e:any ){
alert("month is changed")
console.log(e);

}

}
