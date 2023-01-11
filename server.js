const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const {initialise_socket}  = require('./socket-management');
const { loadSnapsort, createSnapsort, initialise_snapsort } = require('./snapsort-management');

initialise_socket(server);
initialise_snapsort();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/demo', (req, res) => {
    res.sendFile(__dirname + '/demo.html');
  });

app.get('/snapsort', async (req, res) => {
    // load snapsort
    let snapsort_data = await loadSnapsort();
    res.json({ data: snapsort_data });
});
  

server.listen(3000, () => {
  console.log('listening on *:3000');
});


// take snapsort at evert 5 sec interval
setInterval(() => {
    createSnapsort('snapsort.txt')
}, 5000);