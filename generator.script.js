const { io } = require("socket.io-client");
const { faker } = require('@faker-js/faker');
var argv = require('minimist')(process.argv.slice(2));

const cluster_name = argv['cluster-name'];

if(!cluster_name) {
    console.log('[Exiting] No cluster name found!');
    process.exit();
}


const socket = io("http://localhost:3000/");

socket.on("connect", async () => {
    console.log('Connected to the server');
    await generate_events();
});

async function generate_events() {
    let payload = {
        tag_1: faker.name.firstName(),
        tag_2: faker.name.firstName(),
        tag_3: faker.name.firstName(),
        metric_1: faker.finance.amount(),
        metric_2: faker.finance.amount()
    };
    await socket.emit('events', JSON.stringify({
        cluster_name: cluster_name,
        ...payload
    }) );
    setTimeout(async () => {
        return await generate_events();
    }, 2000)
}
