import { Component, Input } from '@angular/core';
import { Task } from '../task'; 
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common'; 


@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskItemComponent,CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() tasks: Task[] = [];
}
