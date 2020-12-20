import { Component, OnInit } from '@angular/core';
import { AppControlsService } from '../services/app-controls.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  itemList: any=[];

  description: any
  constructor(private appService: AppControlsService) { }

  ngOnInit(): void {
    this.fetchItems();
    this.getDescription();
  }

  fetchItems() {
    var items = JSON.parse(localStorage.getItem('$key'));
    for (var i in items) {
      if (items[i].firstName != "" && items[i].lastName != "" && items[i].contactNo != "" && items[i].city != "") {
        this.itemList.push(items[i])
      }
    }
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
