import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  @Input() iproducts: any[];
  @Input() isselected: any = [];
  key = '';
  @Input() inputfilter;
  iproducts2;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.data();
  }

  data() {
    this.service.medicinelist().subscribe((data) => {
      this.iproducts = data;
      this.iproducts2 = data;

    });
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

    // refresh filter box
    //
    console.log(this.inputfilter = '');
    // temporal solution 
    this.iproducts = this.iproducts2;
    // below code  affect selecteditem to be unique
    // this.data();
  }

  itemfilter(ev: any) {
     // TODO:
    // the search should also filter on backspace
    this.key = ev.target.value;
    console.log(this.key);
    if (this.key && this.key.trim() !== '') {

      this.iproducts = this.iproducts.filter((item) => {
        // return item.name.toLowerCase() === this.key.toLowerCase();
        return (item.name.toLowerCase().indexOf(this.key.toLowerCase()) > -1);
      });
    }
    if (this.inputfilter.length < 1) {
      this.iproducts = this.iproducts2;
      // this.data();
      this.key = '';
    }

  }
}
