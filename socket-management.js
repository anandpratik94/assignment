const { Server } = require("socket.io");
var io = null;
const { dataset } = require('./snapsort-management');

function initialise_socket(server) {
    io = new Server(server);
    io.on('connection', (socket) => {
        socket.on('events', msg => {
            msg = JSON.parse(msg);
            dataset.push(msg);
            console.log(`Received events from: ${msg.cluster_name}`);
            io.emit('events_fd', JSON.stringify(msg));
        });
    });
}

module.exports = { initialise_socket }

