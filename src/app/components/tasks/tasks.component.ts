import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {
    // El método suscribe() viene a funcionar como promise o async await para lograr el asincronismo.

    // Dejé en el minuto 59 (09/05/2022)
    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks
      ));
  }

}
