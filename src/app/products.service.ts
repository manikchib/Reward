import { Injectable } from '@angular/core';

export interface products{
  name: String;
  points: number;
  imageurl: String; 
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  sort="";
  private product: products[]=[
    {
      name: "aphone",
      points: 1,
      imageurl: 'https://cdn.pixabay.com/photo/2013/07/13/12/46/iphone-160307_1280.png' 
    },
    {
      name: "bphone2",
      points: 0,
      imageurl: '' 
    },
    {
      name: "cphone2",
      points: 6,
      imageurl: 'https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg' 
    },
    {
      name: "dphone2",
      points: 2,
      imageurl: 'https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg' 
    },
  ]

  constructor() { }

  getProducts(): products[] {
    return this.product;
  }

  onSortChanged(order: string) {
    this.sort = order;
    this.sortProducts(this.sort);
  }

  sortProducts(direction: string) {
    return this.product.sort((a, b) => {
      const nameA = String(a.name);  
      const nameB = String(b.name);

      if (direction === 'AtoZ') {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }  
    });  
  }
}
