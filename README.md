# Restaurant Info Module

> Recreating the restaurant info module from the item page on Zagat.com.

## Related Projects

  - https://github.com/the-notorious-f-e-c/zagat-photos-service
  - https://github.com/the-notorious-f-e-c/zagat-google-reviews
  - https://github.com/the-notorious-f-e-c/zagat-reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> With MongoDB installed and mongo server listening, run: 'npm run seed' to seed database with random data.
> API routes
  - GET    - /api/restaurants/:id/info
  - POST   - /api/restaurants/info
  - PUT    - /api/restaurants/:id/info
  - DELETE - /api/restaurants/:id/info

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- MongoDB
- Express
- Webpack
- Redux
- React
- React Styled Components
- Google Map React
- Jest
- Puppeteer

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
start mongo server in a new terminal "mongod"
npm run seed
npm run build
npm start
```

