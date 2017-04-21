import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.scss']
})
export class PosComponent implements OnInit {
  @Input() iproducts: any[];
  constructor() { }

  ngOnInit() {
    this.iproducts = [
      { 'name': 'amoksiklav' },
      { 'name': 'paracetamol' },
      { 'name': 'citramon' },
      { 'name': 'cheston cold' },
      { 'name': 'brufen' },
      { 'name': 'combiflam' },
    ]
  }

}
