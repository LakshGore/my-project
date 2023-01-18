import { Component, OnInit } from '@angular/core';
import { MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }
  months = ["jan", "feb", "mar", "apr", "may", "jun", "july","aug",
            "sept", "oct", "nov", "dec"]
  check = true

  ngOnInit(): void {
  }

  change( e:any ){
    alert("Button is clicked")
    console.log(e);
    
  }
}
