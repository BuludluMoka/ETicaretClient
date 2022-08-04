import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Create_Product } from 'src/app/contracts/create_product';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private productservice: ProductService, private spinner: NgxSpinnerService, private toastr: CustomToastrService ) { }

  ngOnInit(): void {
  }
  create(Name: HTMLInputElement, Stock: HTMLInputElement, Price: HTMLInputElement) {
    this.spinner.show();
    const create_product: Create_Product = new Create_Product();

    create_product.name = Name.value;
    create_product.stock = parseInt(Stock.value);
    create_product.price = parseFloat(Price.value) ;

    this.productservice.create(create_product, () => {
      this.spinner.hide();
      this.toastr.message("Mehsul Elave Edildi", "Mehsul Elavesi", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopFullWidth
      })
    });


  }

}
