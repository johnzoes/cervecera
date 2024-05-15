import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { VisibilityService } from '../../core/services/visibility.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

   navVisible:boolean = false; 
   
  constructor(private visibilityService: VisibilityService) { }


  ngOnInit() {
    this.visibilityService.navVisible$.subscribe((visible) => {
      this.navVisible = visible;
    });
  }


}
