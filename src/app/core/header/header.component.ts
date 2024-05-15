import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VisibilityService } from '../services/visibility.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  navVisible: boolean= false;
  subNavVisible: boolean = false;

  constructor(private visibilityService: VisibilityService) {}


  toggleNav() {
    this.visibilityService.toggleNav();
  } 

  toggleSubNav() {
    this.subNavVisible = !this.subNavVisible;
  }

  isNavVisible() {
    return this.visibilityService.navVisible$;
  }

  
}
