import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firelist',
  templateUrl: './firelist.component.html',
  styleUrls: ['./firelist.component.css']
})
export class FirelistComponent implements OnInit {
  text: string;
  
  listRef: AngularFireList<any>;
  list: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { 


  }

  ngOnInit() {
  }

  addItem(){
    this.listRef.push(
      {
        text: this.text
      }
    );
  }
}