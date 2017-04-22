import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  @Input() iproducts: any[];
  @Input() isselected: any = [];


  constructor() { }

  ngOnInit() {
    this.iproducts = [
      { 'id': 1, 'name': 'amoksiklav' },
      { 'id': 2, 'name': 'paracetamol' },
      { 'id': 3, 'name': 'citramon' },
      { 'id': 4, 'name': 'cheston cold' },
      { 'id': 5, 'name': 'brufen' },
      { 'id': 6, 'name': 'combiflam' },
    ]
  }

  itemremove(item) {
    //remove selected
    const index = this.isselected.indexOf(item);
    if (index > -1) {
      this.isselected.splice(index, 1);
      console.log(this.isselected);
    }
  }
  itemadd(item) {
    console.log(item)
    const index = this.isselected.indexOf(item);
    console.log(index)
    if (index === -1) {
      this.isselected.push(item);
    }
    //TODO:check if the item is availabe on selecteditem
    //current item from product list when selected 
    // const index = this.iproducts.indexOf(item);
    // if (index > -1) {
    //   this.iproducts.splice(index, 1);
    //   console.log(this.iproducts);
    // }
  }

}
