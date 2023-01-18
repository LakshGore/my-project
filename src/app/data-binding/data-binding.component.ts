import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isavailable = true
  months = ["jan", "feb", "mar", "apr", "may", "jun", "july","aug",
            "sept", "oct", "nov", "dec"]

  check = true
  change(){
    this.check = false
  }

}
  
