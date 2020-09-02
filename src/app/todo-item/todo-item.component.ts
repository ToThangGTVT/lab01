import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Work } from '../datatype/Work';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() work: Work;
  @Output() deleteItem = new EventEmitter<Work>();

  handleUnDone = () => {
    this.work.status = false;
    this.deleteItem.emit(this.work);
  }

  handleDone = () => {
    this.work.status = true;
    this.deleteItem.emit(this.work);
  }

  ngOnInit(): void {
  }

}
