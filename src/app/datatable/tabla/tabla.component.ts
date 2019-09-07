import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/release/components/datatable.component';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  
})


export class TablaComponent implements OnInit {
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  editing = {};
  rows = [
    { name: 'Austin', age: 20,  gender: 'Male', company: 'Swimlane', address: 'La nueva dirección 01' },
    { name: 'Dany', age: 30,  gender: 'Male', company: 'KFC', address: 'La nueva dirección 02' },
    { name: 'Molly', age: 45,  gender: 'Female', company: 'Burger King', address: 'La nueva dirección 03' },
    { name: 'Leo', age: 35,  gender: 'Male', company: 'Burger King', address: 'La nueva dirección 03' },
    { name: 'Maritza', age: 30,  gender: 'Female', company: 'Burger King', address: 'La nueva dirección 03' },
    { name: 'Kami', age: 20,  gender: 'Female', company: 'Burger King', address: 'La nueva dirección 03' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'age'},
    { name: 'gender' },
    { name: 'company', sortable: false },
    { name: 'address'}
  ];

  temp = [];

  tab1 = true;
  tab2 = false;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  
  constructor() { 
    // cache our list
    this.temp = [...this.rows];
    console.log(this.temp);
    // push our inital complete list
    this.rows = this.rows;
    console.log(this.rows);
  }

  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    console.log(temp);
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }

  
  ngOnInit() {
    
  }

}
