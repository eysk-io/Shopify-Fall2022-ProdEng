# :department_store: Inventorify - Shopify Intern Technical Challenge

My submission for the Shopify [Production Engineering Intern](https://docs.google.com/document/d/1cgmV2DW5mEOxhh5ekyopU4Cef07FNalP7WqAJdgpBuw/edit) technical challenge.

Published on Replit: https://replit.com/@EricKim43/Shopify-Fall2022-ProdEng

## Requirements Completed

- [x] Create inventory items
- [x] Edit inventory items
- [x] Delete inventory items
- [x] View a list of inventory items
- [x] Each inventory item should be associated with a city where the item is stored
- [x] There are only 5 possible cities used for storage, which can be hard-coded into the application
- [x] The list of items in the inventory must include the city and a simple textual description of the current weather
- [x] Push a button export product data to a CSV

## Getting Started

There are two options to build and run the program locally. Via `npm` or `docker`.

### Building and Running the Program Locally

From the root of the project, run:

```shell
npm install
npm run dev
```

The program will run on http://localhost:4000.

### Building and Running the Program Locally with Docker

From the root of the project, run:

```shell
docker-compose up --build
```

The program will run on http://localhost:4000.

### Testing

To run tests:

```shell
npm install
npm run test
```

## API Documentation

The application is a simple CRUD API for managing inventory. The routes are documented below.

### Routes - /api/product

All `/api/product` routes can be found in the [product.router.js](https://github.com/eyskim/Shopify-Fall2022-ProdEng/blob/48f1c28fac4fa63edca5ac75fa03d042709ec0e1/src/resources/product/product.router.js#L6-L15) module within the source code.

#### GET /api/product
Retrieves a list of all inventory items.

#### POST /api/product
Creates a new inventory item.

#### GET /api/product/:productName
Retrieves a specific inventory item.

#### PUT /api/product/:productName
Updates a specific inventory item.

#### DELETE /api/product/:productName
Deletes a specific inventory item.
