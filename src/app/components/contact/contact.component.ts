import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  comment: string;


  @ViewChild('contactForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit({value, valid}: {value: any, valid: boolean}){
    console.log(value);
    console.log(valid);
  }

}
