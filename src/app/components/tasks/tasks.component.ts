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

    this.taskService.getTask().subscribe((tasks)=>(
      this.tasks = tasks
      ));
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(()=>(
      this.tasks = this.tasks.filter( (t) => t.id !== task.id)
    ))
  }

  // Dejé en 1 h 34' 16/05/2022

  toggleReminder(task: Task) {
    // Actualizo el front
    task.reminder = !task.reminder;
    // Le envio el cambio al servicio para que actualice mi DB
    this.taskService.updateTaskReminder(task).subscribe();
  }


}
