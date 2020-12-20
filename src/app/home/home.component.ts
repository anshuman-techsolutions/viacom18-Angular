import { Component, OnInit } from '@angular/core';
import { AppControlsService } from '../services/app-controls.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  description: any
  constructor(private appService: AppControlsService) { }

  ngOnInit(): void {
    this.getDescription();
  }

  getDescription() {
    this.appService.getDescription().subscribe(data => {
      console.log('Description', data);
      if (data) {
        this.description = data['Description']
      }

    }, error => {
      alert(error);
      console.log('error city', error);
    })
  }
}
