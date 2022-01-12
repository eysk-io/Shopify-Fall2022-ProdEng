# Inventorify: Shopify Production Engineering Technical Challenge

My submission for the [Shopify Production Engineering Technical Challenge](https://docs.google.com/document/d/1wir0XQuviR6p-uNEUPzsGvMFwqgMsY8sEjGUx74lNrg/edit).

## Getting Started

There are two options to build and run the program locally. Via `npm` or via `docker`.

### Building and Running the Program Locally

A local installation of `MongoDB` is required for building and running the program. A free community version can be found here: https://www.mongodb.com/try/download/community.

From the root of the project, run:

```shell
npm install
npm run dev
```

The program will run on http://localhost:3000.

### Building and Running the Program Locally with Docker

From the root of the project, run:

```shell
docker-compose up
```

The program will run on http://localhost:3000.

### Testing

To run tests:

```shell
npm install
npm run test
```
