# :department_store: Inventorify - Shopify Intern Technical Challenge

My submission for the Shopify [Production Engineer](https://docs.google.com/document/d/1wir0XQuviR6p-uNEUPzsGvMFwqgMsY8sEjGUx74lNrg/edit) and [Backend Developer](https://docs.google.com/document/d/1z9LZ_kZBUbg-O2MhZVVSqTmvDko5IJWHtuFmIu_Xg1A/edit) technical challenges. 

## Getting Started

There are two options to build and run the program locally. Via `npm` or via `docker`.

### Building and Running the Program Locally

A local installation of `MongoDB` is required for building and running the program. A free community version can be found here: https://www.mongodb.com/try/download/community.

From the root of the project, run:

```shell
sudo mongod
npm install
npm run dev
```

The program will run on http://localhost:3000.

### Building and Running the Program Locally with Docker

From the root of the project, run:

```shell
docker-compose up
```

The program will run on http://localhost:4000.

### Testing

To run tests:

```shell
npm install
npm run test
```

## API Documentation

The application is a simple CRUD API for managing vendors and their inventory. The routes are documented below.

### Routes - /api/product

All `/api/product` routes can be found in the [product.router.js](https://github.com/eyskim/Inventorify/blob/0f1a6a11f014057c31134cfd4075966c1b8ae856/src/resources/product/product.router.js) module within the source code.

#### GET /api/product
Retrieves a list of all inventory items.

#### GET /api/product/:vendorName
Retrieves a list of all inventory items of a specific vendor.

#### POST /api/product/:vendorName/:productName
Creates a new inventory item for a specific vendor.

#### GET /api/product/:vendorName/:productName
Retrieves a specific inventory item.

#### PUT /api/product/:vendorName/:productName
Updates a specific inventory item.

#### DELETE /api/product/:vendorName/:productName
Deletes a specific inventory item.

### Routes - /api/vendor

All `/api/vendor` routes can be found in the [vendor.router.js](https://github.com/eyskim/Inventorify/blob/0f1a6a11f014057c31134cfd4075966c1b8ae856/src/resources/vendor/vendor.router.js) module within the source code.

#### GET /api/vendor
Retrieves a list of all vendors.

#### POST /api/vendor
Creates a new vendor.

#### GET /api/vendor/:vendorName
Retrieves a specific vendor.

#### PUT /api/vendor/:vendorName
Updates a specific vendor.

#### DELETE /api/vendor/:vendorName
Deletes a specific vendor.
