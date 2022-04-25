import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.getTodoByUserId(userId);
  }

  getTodoByUserId(userId: number) {
    this.todoService.getTodoByUserId(userId).subscribe(data=>this.todos=data);
  }

}
