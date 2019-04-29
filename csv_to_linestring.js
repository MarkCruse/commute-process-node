var csv2geojson = require('csv2geojson');
var fs = require('fs');

// read file as string
fs.readFile('project-files/21_od_distance.csv', 'utf-8', (err, csvString) => {

    if (err) throw err;
    console.log(csvString);

    // convert to GeoJSON
    csv2geojson.csv2geojson(csvString, {
        latfield: 'w_lat',
        lonfield: 'w_lon',
        delimiter: ','
    }, (err, geojson) => {

        if (err) throw err;

        console.log(geojson); // this is our geojson!

        // write file
        fs.writeFile('data/points.json', JSON.stringify(geojson), 'utf-8', (err) => {

            if (err) throw err;

            console.log('done writing file');
        });
    })
});