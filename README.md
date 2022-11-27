# StoreFrontend

This project represents a front-end application for an online store.  
The store front has a product list, product detail pages, cart functionality, an order submit function, and a dark/light mode (globe icon on the top-left)

## This requires Angular CLI

Follow https://angular.io/cli if Angular CLI needs to be installed.

## Install Dependencies

Run 'npm i' form inside the project folder to install all dependencies

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# Details

## Components 
- Products: Handles the list of products
- ProductItem: Displays product info in the product list
- ProductItemDetail: Displays detailed product info
- Cart: Handles current products in the cart
- Toast: Displays toast notification messages
- OrderConfirmation: Show order information after order submission

## Models
- Order: Contains information regarding an order to be submitted
- Product: Contains information for products

## Routing
- '/' - Navigate to Products
- '/cart' - Navigate to Cart
- '/productiondetail' - Navigate to ProductItemDetail
- '/confirmation' - Navigate to OrderConfirmation

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
