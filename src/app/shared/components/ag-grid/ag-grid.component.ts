import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Module} from 'ag-grid-community';



@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.less']
})
export class AgGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input() modules: Module[] = [];
  @Input() columnDefs;
  @Input() rowData: [];
  @Output() sortChanged = new EventEmitter();
  @Output() cellClicked = new EventEmitter();
  @Output() rowClicked = new EventEmitter();
  @Output() selectionChanged = new EventEmitter();
  @Output() rowDoubleClicked = new EventEmitter();
  @Output() columnVisible = new EventEmitter();
  @Output() dragStopped = new EventEmitter();
  
  @Input() set gridOptions(opts) {
    this._gridOptions = Object.assign({}, this._gridOptions, opts);
  }

  get gridOptions() {
    return this._gridOptions;
  }

  private gridApi;
  private gridColumnApi;
  private _gridOptions = {
    overlayNoRowsTemplate: '查询无数据！',
    rowSelection: 'multiple',
    suppressCellSelection: true,
    suppressRowClickSelection: true,
    // rowMultiSelectWithClick: true,
    // suppressCellSelection: true
  };

  frameworkComponents = {

  };

  defaultColDef = {
    sortable: true,
    resizable: true,
  };

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  onSortChangedHandler(e) {
    const state = this.gridColumnApi.getColumnState();
    this.sortChanged.emit(state);
  }

  onCellClickedHandler(e) {
    this.cellClicked.emit(e);
  }

  onRowClickedHandler(e) {
    this.rowClicked.emit(e);
  }

  onSelectionChangedHandler(e) {
    this.selectionChanged.emit(e);
  }

  onRowDoubleClickedHandler(e) {
    this.rowDoubleClicked.emit(e);
  }

  columnVisibleHandler(e) {
    const state = this.gridColumnApi.getColumnState();
    this.columnVisible.emit(state);
  }

  dragStoppedHandler(e) {
    const state = this.gridColumnApi.getColumnState();
    this.dragStopped.emit(state);
  }

} 
