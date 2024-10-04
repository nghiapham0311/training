# MSA-BLUEPRINT

This project using [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Update environment with your server endpoint

Open file `environments\environments.ts`. Change `serverUrl` and `gatewayService` by your server endpoint

## Install library

If your not setup any proxy, please setup it because we in Bosch network can not install direct library. We recomment using `px proxy` https://inside-docupedia.bosch.com/confluence/display/DEVCORNER/Px

Run `npm install`

## Development server

Run `npm run start` for run dev. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy on Azure

Using the `dist/` directory to deploy

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).