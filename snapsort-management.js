const fse = require('fs-extra');

let dataset = [];

async function createSnapsort (filePath='snapsort.txt') {
    try {
        await fse.writeFile(filePath, JSON.stringify(dataset));
        console.log('snapsort created');
    } catch (error) {
      console.error('writeFile failed: ', error);
    }
}

async function loadSnapsort (filePath = 'snapsort.txt') {
    try {
        let data = await fse.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
      console.error('writeFile failed: ', error);
    }
}

async function initialise_snapsort() {
    dataset = await loadSnapsort();
}

module.exports = {
    createSnapsort, loadSnapsort, dataset, initialise_snapsort
}