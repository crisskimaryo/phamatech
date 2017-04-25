import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit, DoCheck {
  @Input() iproducts: any[];
  @Input() isselected: any = [];
  key = '';
  @Input() inputfilter;
  iproducts2;
  @Input() subtotal = 0.00;
  @Input() grosstotal = 0.00;
  discount = 0;
  qnty = 1;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.data();

  }
  ngDoCheck() {
    // console.log(this.qnty);

    let totalprice = 0;
    if (this.isselected.length > 0) {
      this.isselected.forEach(element => {

        totalprice += element.price * element.quantity;
      });
      this.subtotal = totalprice;
      // TODO:
      // limit the respond for (0 to 100) only
      this.grosstotal = totalprice - ((totalprice / 100) * this.discount)

    }
  }
  updateqnty(ev: any, item) {
    let qt = ev.target.value;
    const index = this.isselected.indexOf(item);
    // console.log(item);
    if (qt > 0) {
      // const newprice = this.isselected[index].price * qt;
      // console.log(this.isselected[index].price = newprice);
      console.log(this.isselected[index].quantity = qt)

      return console.log(this.isselected[index]);
    }
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
      // console.log(this.isselected);

    }
    if (this.isselected.length < 1) {
      this.subtotal = 0;
    }
  }
  itemadd(item) {
    // console.log(item)
    const index = this.isselected.indexOf(item);
    // console.log(index)
    if (index === -1) {
      item.newprice = item.price;
      item.quantity = 1;
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
    this.inputfilter = '';
    // temporal solution 
    this.iproducts = this.iproducts2;
    // below code  affect selecteditem to be unique
    // this.data();
  }

  itemfilter(ev: any) {
    // TODO:
    // the search should also filter on backspace
    this.key = ev.target.value;
    // console.log(this.key);
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
