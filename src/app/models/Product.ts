export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  url: string;

  constructor(){
    this.id = 1;
    this.name = "";
    this.description = "";
    this.price = 1.00;
    this.quantity = 1;
    this.url = "";
  }

}
