const fs = require('fs')

let x = fs.readFileSync('data.json');
const y = JSON.parse(x);
module.exports = (y);