import { Component, OnInit, Injectable } from '@angular/core';
import { Work } from '../datatype/Work';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
@Injectable()
export class TodoComponent implements OnInit {

  constructor() { }

  work: Work;
  arrWork = new Array<Work>();

  addWork(value): void {
    this.arrWork.push({title: value, status: false});
  }

  handleDelete(item: string): void {
    this.arrWork.map((i) => {
      if (i.title === item) {
        return i.status = true;
      }
    });
  }

  ngOnInit(): void {
  }
}
