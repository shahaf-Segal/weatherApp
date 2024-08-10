# WeatherApp - React/node.js app to view weather around the world
an app intended to view the weather around the world by searching for the city

## Table of Contents
- [Server Installation](#Server_installation)
- [Server Setup](#Setup)
- [Client Installation](#installation)
- [Client Development Setup](#development-setup)
- [Client Building for Production](#building-for-production)
- [Client Running the Production Build](#running-the-production-build)

## Server_installation

To get started with the Phone Directory Server, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/phone-directory-server.git
   ```

2. Navigate to the project directory:

   ```sh
   cd phone-directory-server
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```
## Setup
1. To Run the Server it must have A reachable DB , the .env file should contain this:
   
   ```sh
   MONGO_URL=<Mongo_Url>
   ```
   
    

## Running the Production Server

To start the server in production mode:

1. Start the server:

   ```sh
   npm start
   ```

   The server will be running on the specified port (default is `211`).


## Installation

To get started with the Phone Directory App, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository:

   ```sh
   git clone https://github.com/shahaf-Segal/weatherApp.git
   ```

2. Navigate to the project directory:

3. Install the dependencies:

   ```sh
   npm install
   ```
4. Change the constanst file:
   ```sh
   export const SERVER_URL = "http://localhost:2105/api/weather/";
   ```
   should point to server ip , this is the default

## Development Setup

To start the app in development mode with hot-reloading:

1. Run the development frontend:

   ```sh
   npm run dev
   ```

   This will start the development server and open the app in your default web browser at `http://localhost:3157`.

## Building for Production

To create a production-ready build of the app:

1. Run the build script:

   ```sh
   npm run build
   ```

   This will create a `build` directory with all the optimized and minified files necessary for deployment.

## Running the Production Build

To serve the production build locally, you can use a static server such as `serve`.

1. Install `serve` globally:

   ```sh
   npm install -g serve
   ```

2. Serve the production build:

   ```sh
   serve -s dist
   ```

   a prompt will open leading you to the website
