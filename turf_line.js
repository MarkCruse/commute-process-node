const Fs = require('fs');
const Turf = require('turf');
const D3Dsv = require('d3-dsv');

// read file as string
// fs.readFile('project-files/21_od_distance.csv', 'utf-8', (err, csvString) => {

//if (err) throw err;
//console.log(csvString);

// read in csv 
const csvInput = Fs.readFileSync('project-files/21_od_distance.csv').toString();
// console.log(csvInput);

// parse csv
const jsonData = D3Dsv.csvParse(csvInput);

// add distance field for each entry
jsonData.forEach(el => {
    const dataLine= Turf.lineString([el.w_lon, el.w_lat], [el.h_lon, el.h_lat]);
    //el.distance = Turf.distance(CENTER, dataLine);
    console.log(dataLine)
});
// });
