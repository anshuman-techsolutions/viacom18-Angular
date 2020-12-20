import { Component, OnInit } from '@angular/core';
import { AppControlsService } from '../services/app-controls.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {
  cities: any = []
  city: any;
  description: any;
  row = [{ firstName: '', lastName: '', contactNo: '', city: '' },];


  constructor(private appService: AppControlsService) {
  }

  ngOnInit(): void {
    this.getCities();
    this.getDescription();
  }

  isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }
  addTable() {
    const obj = {
      firstName: '',
      lastName: '',
      contactNo: '',
      city: ''
    }
    this.row.push(obj)
  }
  resetForm() {
    this.row = [];
    this.addTable();
  }
  deleteRow(x) {
    var delBtn = confirm(" Do you want to delete ?");
    if (delBtn == true) {
      this.row.splice(x, 1);
    }
  }
  submitTable() {
    if (this.row.length > 0) {
      // console.log('storage b4', JSON.parse(localStorage.getItem("$key")));
      if (JSON.parse(localStorage.getItem("$key"))) {
        var stored = JSON.parse(localStorage.getItem("$key"));
        for (var i in this.row) {
          stored.push(this.row[i]);
        }
        localStorage.setItem("$key", JSON.stringify(stored));
      } else {
        localStorage.setItem('$key', JSON.stringify(this.row))
      }
      this.resetForm()
      // console.log('storage after ', JSON.parse(localStorage.getItem("$key")));
    }
  }
  getCities() {
    this.appService.getCities().subscribe(data => {
      console.log('cities', data);
      if (data) {
        for (var i in data['cityData'])
          this.cities.push(data['cityData'][i].city)
        console.log('cities', data['cityData'][i].city);
      }

    }, error => {
      alert(error);
      console.log('error city', error);
    })
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
