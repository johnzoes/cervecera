import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { CommonModule } from '@angular/common';
import { VisibilityService } from './core/services/visibility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'cervezeria';



}
