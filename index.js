const { parse } = require('csv-parse');
const fs = require('fs')

const habitablePlanet = []

const isHabitablePlanet = (planet) => {
    return planet.koi_disposition === 'CONFIRMED'
}

fs.createReadStream('kepler_data.csv')
    .pipe(parse({ // readableStream.pipe(writebaseStream)
        comment: '#',
        columns: true
    }))
    .on('data', (planet) => {
        if (isHabitablePlanet(planet)) {
            habitablePlanet.push(planet)
        }
    })
    .on('error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(habitablePlanet); // now print the bytes array
        console.log('done');
    })

// parse