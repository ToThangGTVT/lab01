import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() item: string;
  @Output() deleteItem = new EventEmitter<string>();

  handleDelete = () => {
    this.deleteItem.emit(this.item);
  }

  ngOnInit(): void {
  }

}
