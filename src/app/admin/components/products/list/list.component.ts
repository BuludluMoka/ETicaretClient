import { verifyHostBindings } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { List_Product } from 'src/app/contracts/list_product';
import { CustomToastrService, ToastrMessageType, ToastrOptions, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
import { ProductService } from 'src/app/services/common/models/product.service';

declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private productService: ProductService, private toastr: CustomToastrService) { }


  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updateDate', 'edit', 'delete'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

 
  async getProducts() {
    this.spinner.show();

    const allProducts: { totalCount: number, products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5, () => this.spinner.hide(), () => {
      this.spinner.hide();
      this.toastr.message("Bir problem yarandi", "Xeta", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      })
    })

    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length = allProducts.totalCount;
  }
   delete(id, event){
    const img: HTMLImageElement = event.srcElement;
    
    this.productService.delete(id)
    $(img.parentElement.parentElement).fadeOut(1000,()=>{ this.getProducts()});
  }

 
  async pageChanged() {
    await this.getProducts();
  }
  async ngOnInit() {
    await this.getProducts()
  }
  

}
