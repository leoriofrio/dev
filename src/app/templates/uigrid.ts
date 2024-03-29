import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from '../../app/app.component';
import { IGridoption } from '../../app/interface/igridoption';

export function initUiGrid() {

  const uiGridComponent: angular.IComponentOptions = {
    bindings: {
      data: '<',
      onEdit: '&',
      gridOptions: '='
    },
    transclude: true,
    controller: ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {

      const ctrl = this;

      const today = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(nextWeek.getDate() + 7);

      $scope.highlightFilteredHeader = function (row, rowRenderIndex, col, colRenderIndex) {
        if (col.filters[0].term) {
          return 'header-filtered';
        } else {
          return '';
        }
      };

      $scope.msg = {};
      $scope.gridOptions = {
        columnDefs: [
          { field: 'ID', width: '13%' },
          { field: 'Name', width: '13%' },
          { field: 'City2',  width: '13%' },
          { field: 'Address', width: '13%' },
          { field: 'Designation', width: '13%' },
          { field: 'Cantidad', aggregationType: uiGridConstants.aggregationTypes.sum, width: '13%' },
        ],
        enableFiltering: true,
        enableCellEdit: true,
        showGridFooter: true,
        showColumnFooter: true,
        enableSorting: true,
        treeRowHeaderAlwaysVisible: false,
        enableGridMenu: true,
        paginationPageSizes: [50,100,200,500],
        paginationPageSize: 50,
        headerCellClass: 'white',
        enableColumnResizing:true,
        width: 100,
        exporterMenuPdf: false,
        exporterMenuCsv: true,
        exporterMenuExcel: false,
        exporterCsvFilename:'data.csv',
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        onRegisterApi: function (gridApi) {
          $scope.gridApi = gridApi;
            $scope.gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue){
                    console.log('Old Value: ' + oldValue + ' New Value: ' +  newValue ) // here value of k is always 3.
                    console.log( rowEntity);
                    /* I want to handle celledit of specific grid from gridApi. But this is not working as the variable 'k' doesn't change according to loop and it will be fixed always.*/
           })
      
        }
      };

      $scope.toggleFooter = function() {
        $scope.gridOptions.showGridFooter = !$scope.gridOptions.showGridFooter;
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);
      };
       
      $scope.toggleColumnFooter = function() {
        $scope.gridOptions.showColumnFooter = !$scope.gridOptions.showColumnFooter;
        $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.OPTIONS);
      };

      $scope.editEmployee = function(row){
        ctrl.onEdit({
          "City":row.City,
          "Designation":row.Designation,
          "ID":row.ID,
          "Name":row.Name
        });
      } 

      $scope.afterEditing = function(row)
      {
        ctrl.onChanged({
          return : 's'
        });
      }

      $scope.toggleFiltering = function () {
        $scope.gridOptions.enableFiltering = !$scope.gridOptions.enableFiltering;
      };

      function makeColDefs(row) {
        const colDefs = [];
        let exist = [];

        for (let i = 0; i < row.length; i++) {

          for (const colName in row[i]) {

            if (exist.indexOf(colName) === -1) {

              colDefs.push({
                'field': colName,
                'width': 200
              });
              exist.push(colName);
            }
          }
        }
        exist = undefined;
        return colDefs;
      }

      this.$onChanges = function(obj: { data: { currentValue: Array<{}>},gridOptions:{ currentValue:IGridoption }}) {
        if (obj.data.currentValue && obj.data.currentValue.length) {
          const colDefs = makeColDefs(obj.data.currentValue);
          $scope.gridOptions.data = obj.data.currentValue;
          if(obj.gridOptions && obj.gridOptions !== undefined){
            Object.keys(obj.gridOptions.currentValue).map(function(key, index) {
              $scope.gridOptions[key] = obj.gridOptions.currentValue[key];
            });
            if(obj.gridOptions.currentValue.columnDefs && obj.gridOptions.currentValue.columnDefs !== undefined){
              $scope.gridOptions.columnDefs = obj.gridOptions.currentValue.columnDefs;
            }
          }else{
            $scope.gridOptions.columnDefs = colDefs; 
          }
        }

      };

      this.$onInit = function() {}

    }],
    template: '<div ui-grid="gridOptions" ui-grid-edit ui-grid-resize-columns ui-grid-exporter ui-grid-auto-resize ui-grid-pagination class="grid" style="width:100%;"></div>'
  };
  return angular.module('uigridmodule', ['ui.grid', 'ui.grid.edit', 'ui.grid.selection','ui.grid.exporter','ui.grid.pagination'])
    .component('ui-grid', uiGridComponent)
    .directive('appRoot', downgradeComponent({ component: AppComponent }));
}
