import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { VisibilityService } from '../../core/services/visibility.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  navVisible: boolean = false;

  constructor(private visibilityService: VisibilityService) { }

  ngOnInit() {
    this.visibilityService.navVisible$.subscribe((visible) => {
      this.navVisible = visible;
    });
  }

}
