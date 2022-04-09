const { parse } = require('csv-parse');
const fs = require('fs')

const results = []

fs.createReadStream('kepler_data.csv')
    .on('data', (chunk) => {
        results.push(chunk)
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(results); // now print the bytes array
        console.log('done');
    })

// parse