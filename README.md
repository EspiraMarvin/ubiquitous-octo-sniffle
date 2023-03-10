# SIL FRONTEND

## Available Scripts

In the project directory, you can run:

### `yarn `

To install project dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

To run unit tests.

### `yarn test:coverage`

For test coverage

### `yarn prettier:format`

For code linting

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## **Technologies 🧪**

- ▶️ React JS (v 18)
- ▶️ TypeScript
- ▶️ Firebase (v 9.15) / google auth
- ▶️ TailwindCSS
- ▶️ Context API
- ▶️ Custom hooks
- ▶️ JEST & React Testing Library
- ▶️ Jsonplaceholder api
- ▶️ Sentry for logging
- ▶️ Docker for containerization
- ▶️ Prettier and Eslint for code formatting and linting

## **Build link 🧪**

[https://ubiquitous-octo-sniffle.vercel.app](https://ubiquitous-octo-sniffle.vercel.app)

**Note: After updating a photo title, don't refresh the page, this may trigger a network refetch to get the original photos from the placeholder api as the photos are not saved in localstorage but in the context hook!!**

### `docker-compose up --build`

Run the command above to build locally with docker

### `yarn prettier:format`

Run the command above before committing code to the repo.
