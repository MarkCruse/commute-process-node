var fs = require('fs');

// read the file with a synchronous fs request
var rawData = fs.readFileSync('./project-files/cartocolors.json', 'utf8');

// use JSON.parse() to parse raw string to JSON
var data = JSON.parse(rawData);

// create a new object with key 'Emrld' and value the object
var outputData = {
    'Emrld': data['Emrld']
};

// write the output file, stringifying the JS object
fs.writeFileSync('./data/emrldcolors.json', JSON.stringify(outputData));
