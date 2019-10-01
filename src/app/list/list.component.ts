import { Component, OnInit } from '@angular/core';
import { myservice } from '../my.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dat:myservice) { }

  ngOnInit() {
    this.mystore=this.dat.getdatas()
  }
  mystore=[]

}
