import { Component, OnInit } from '@angular/core';
import { IGridColumnDefs, IGridoption } from '../../interface/igridoption';

//#region method from an JS file
declare function getDatos(any): any;
//#endregion

@Component({
  selector: 'app-tablauigrid',
  templateUrl: './tablauigrid.component.html',
  styleUrls: ['./tablauigrid.component.css']
})
export class TablauigridComponent implements OnInit {

  employee: any;
  gridOptions:IGridoption;

  constructor() { 
    
  }

  ngOnInit() {
    
    /*
    console.log( "Datos");
    console.log( this.myData );
    getDatos(this.myData);
    */
   setTimeout(()=>{
    this.employee =  [{
      "ID": 1,
      "Name": "Kevin",
      "City": "Santa Clara",
      "Address": "Longmen",
      "Designation": "VP Marketing",
      "Cantidad": 10
    }, {
      "ID": 2,
      "Name": "Tina",
      "City": "São Bartolomeu",
      "Address": "Bojongloa",
      "Designation": "Computer Systems Analyst III",
      "Cantidad": 12
    }, {
      "ID": 3,
      "Name": "Kevin",
      "City": "Cilolohan",
      "Address": "Tai’an",
      "Designation": "Paralegal",
      "Cantidad": 74
    }, {
      "ID": 4,
      "Name": "Rebecca",
      "City": "Runović",
      "Address": "Tessaoua",
      "Designation": "Human Resources Manager",
      "Cantidad": 5
    }, {
      "ID": 5,
      "Name": "Nancy",
      "City": "Merritt",
      "Address": "Yur’yevets",
      "Designation": "Assistant Manager",
      "Cantidad": 36
    }, {
      "ID": 6,
      "Name": "Anne",
      "City": "Pio Duran",
      "Address": "Kuala Lumpur",
      "Designation": "Sales Representative",
      "Cantidad": 19
    }, {
      "ID": 7,
      "Name": "Scott",
      "City": "Xiamao",
      "Address": "Banjarmasin",
      "Designation": "Computer Systems Analyst II",
      "Cantidad": 9
    }, {
      "ID": 8,
      "Name": "Howard",
      "City": "Rzeczenica",
      "Address": "Nanyo",
      "Designation": "Recruiting Manager",
      "Cantidad": 24
    }, {
      "ID": 9,
      "Name": "Frances",
      "City": "Tubuhue",
      "Address": "Rambatan",
      "Designation": "Senior Quality Engineer",
      "Cantidad": 31
    }, {
      "ID": 10,
      "Name": "Bruce",
      "City": "Gandi",
      "Address": "Manuel Roxas",
      "Designation": "Senior Financial Analyst",
      "Cantidad": 35
    }, {
      "ID": 11,
      "Name": "Victor",
      "City": "Liuhou",
      "Address": "Sambirejo",
      "Designation": "Actuary",
      "Cantidad": 41
    }, {
      "ID": 12,
      "Name": "Phillip",
      "City": "Fubei",
      "Address": "Ulset",
      "Designation": "Account Representative II",
      "Cantidad": 74
    }, {
      "ID": 13,
      "Name": "Cheryl",
      "City": "Chasŏng",
      "Address": "Otok",
      "Designation": "Mechanical Systems Engineer",
      "Cantidad": 85
    }, {
      "ID": 14,
      "Name": "Arthur",
      "City": "Shimodate",
      "Address": "Morada Nova",
      "Designation": "Payment Adjustment Coordinator",
      "Cantidad": 96
    }, {
      "ID": 15,
      "Name": "Jean",
      "City": "Mojo",
      "Address": "Pushkino",
      "Designation": "Budget/Accounting Analyst II",
      "Cantidad": 29
    }, {
      "ID": 16,
      "Name": "Russell",
      "City": "Qīrah",
      "Address": "Vista Hermosa",
      "Designation": "Research Assistant III",
      "Cantidad": 41
    }, {
      "ID": 17,
      "Name": "Larry",
      "City": "Garoua Boulaï",
      "Address": "Guanchi",
      "Designation": "Office Assistant I",
      "Cantidad": 61
    }, {
      "ID": 18,
      "Name": "Kathleen",
      "City": "Thongwa",
      "Address": "Awilega",
      "Designation": "Social Worker",
      "Cantidad": 64
    }, {
      "ID": 19,
      "Name": "Michael",
      "City": "Hongqi",
      "Address": "Karatau",
      "Designation": "Electrical Engineer",
      "Cantidad": 56
    }, {
      "ID": 20,
      "Name": "Anna",
      "City": "Xiacang",
      "Address": "K Bang",
      "Designation": "Product Engineer",
      "Cantidad": 59
    }];

    this.gridOptions = <IGridoption>{}
    this.gridOptions.exporterMenuPdf = true;
    this.gridOptions.columnDefs = [

    ];
    Object.keys(this.employee[0]).map((key, index) => {
      let gridColumnDefs = <IGridColumnDefs>{}
      gridColumnDefs.field = key;
          
      gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents  tooltip-uigrid' title='{{COL_FIELD}}'><a>{{COL_FIELD CUSTOM_FILTERS}}</a></div>";                  
      
      switch(key) { 
        case 'Cantidad': { 
           //statements; 
           gridColumnDefs.footerCellTemplate = "<div class='ui-grid-cell-contents' style='background-color: White;color: Black'></div>";
           gridColumnDefs.aggregationType = "uiGridConstants.aggregationTypes.sum";
           gridColumnDefs.enableCellEdit = true;  
           break; 
        } 

        default: { 
           //statements; 
           gridColumnDefs.footerCellTemplate = "";
           gridColumnDefs.aggregationType = "";
           break; 
        } 
     } 
      
      console.log(key);      
      this.gridOptions.columnDefs.push(gridColumnDefs);
    });
    let gridColumnDefs = <IGridColumnDefs>{}
    gridColumnDefs.field = 'edit';
    gridColumnDefs.enableSorting = false;
    gridColumnDefs.cellTemplate = "<div class='ui-grid-cell-contents tooltip-uigrid' title='edit'><a href='JavaScript:Void(0);' ng-click='grid.appScope.editEmployee(row.entity);'>edit</a></div>"
    this.gridOptions.columnDefs.push(gridColumnDefs);
  },200)
  
  }

  onEditFunction = ($event) =>{
    console.log($event);
    alert('City: '+$event.City+', Designation: '+$event.Designation+', ID: '+$event.ID+', Name: '+$event.Name)
  }

  onAfterEdit(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.employee[rowIndex + '-' + cell] = false;
    this.employee[rowIndex][cell] = event.target.value;
    this.employee = [...this.employee];
    console.log('UPDATED!', this.employee[rowIndex][cell]);
  }

  


}
