# Assignment

Technology used: `NodeJs, SocketIo, Jquery

Features:
- There will be many clusters that are emiting events with a very high speed at a given socket connection. Please see the `Generator Server Setup` for details.
- Main server:
  - Provide a socket connection for the clusters to connect.
  - Emit the data received from all the clusters to the frontend using socket.
  - Create perodic snapsort for the data.
  - Exposed a public API `/snapsort` for the frontend to load the latest snap on page load.
- Frontend:
  - Connect with the main server with socket connection.
  - Receives the high frequency data stream from the main server.
  - Displays all he live events to the user using [datatable](https://datatables.net/)
  - User can sort and search.

##### NodeJS
  - Use Node [16.15.0] (https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)

##### NPM
  - Use NPM >= 8.5.5
  - npm install npm@8.5.5 -g

#### App Server Setup
  - `npm install`
  -  `node server.js`
  
#### Generator Server Setup
  - Run `node generator.script.js --cluster-name <cluster-name>`
  - For example `node generator.script.js --cluster-name cluster-1`
  - Start multiple clusters.
    