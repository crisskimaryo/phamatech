import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../../service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() prodlist;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.medicinelist().subscribe((data) => {
      this.prodlist = data;
    })

  }

}
