export class Order{
  fullName: string;
  amountOfItems: number;
  totalCost: string;

  constructor(){
    this.fullName = '',
    this.amountOfItems = 0,
    this.totalCost = "$0.00"
  }
}
