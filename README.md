This project is a video checking project. 
 
## Description 
 
The "Video Check" project aims to provide a solution for video checking. It utilizes various technologies and packages to create a reliable and efficient video checking system. 
 
## Installation 
 
To install and run the project locally, please follow these steps: 
 
1. Clone the repository:  git clone https://github.com/Joystream/curator-video-tool
2. Navigate to the project directory: `cd curator-video-tool`
3. Install dependencies: `npm install`
 
## Client
 
`npm run dev | preview`

## Backend
The client requires an /auth server.

`cd mongo_backend`
`cp .env-example .env` # install mongo DB and adjust settings
`npm run start | server`

## Dependencies 
 
The project relies on the following dependencies: 
 
- axios: ^0.21.0 
- bcryptjs: ^2.4.3 
- client: file:client 
- config: ^3.3.3 
- cors: ^2.8.5 
- express: ^4.17.1 
- express-validator: ^6.8.1 
- gravatar: ^1.8.1 
- jsonwebtoken: ^8.5.1 
- mongoose: ^5.11.8 
- normalize-url: ^5.3.0 
 
## Development Dependencies 
 
The project has the following development dependencies: 
 
- concurrently: ^5.3.0 
- nodemon: ^2.0.6 
 
## License 
 
This project is licensed under the MIT license. For more information, please refer to the LICENSE file. 
 
## Authors
 
This project was authored by Josh Groban, Klaudiusz Dembler and goldwold
