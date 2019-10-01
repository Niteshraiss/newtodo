import { Component, OnInit } from '@angular/core';
import { myservice } from '../my.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  item;
  constructor(private dat:myservice) { }
  mylist;
  ngOnInit() {

  }
  adddata()
  {
    this.mylist={list:''}
    this.mylist.list=this.item;
    this.dat.putdata(this.mylist);
  }
}
