import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ProductsService, products } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { RightpopupComponent } from '../rightpopup/rightpopup.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit, OnChanges {

  @ViewChild('popup') popup!: RightpopupComponent;
  
  data:string='';
  product: products[] = [];
  searchText: String = "";
  sort = "";
  productlength:number=0;

constructor(private productservice: ProductsService
){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

ngOnInit() {
  this.product = this.productservice.getProducts();
  this.productlength = this.product.length;
}

openpopup(){
  this.popup.openPopup();
}

onSortChanged(order: string){
  this.sort = order;
  this.productservice.onSortChanged(this.sort);

  }

  
}




