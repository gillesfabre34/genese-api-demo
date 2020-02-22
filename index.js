"use strict";
exports.__esModule = true;
console.log('XXXXXXXXXXXXXXXX');
console.log('__dirname', __dirname);
console.log('XXXXXXXXXXXXXXXX');
const path = __dirname + "/node_modules/genese-api/genese-api";
console.log('path', path);
// var genese_api_1 = require(__dirname + "/node_modules/genese-api/index");
var genese_api_2 = require(path);

console.log('OK !!!   XXXXXXXXXXXXXXXX');
const api = new genese_api_2.GeneseApi();
var fs = require('fs');
// createDir('./genese');
// createDir('./genese/genese-api');
// createDir('./genese/genese-api/dtos');
// var geneseApi = new genese_api_1.GeneseApi();
// geneseApi.createDtos();
// function createDir(path) {
//     if (!fs.existsSync(path)) {
//         fs.mkdirSync(path);
//     }
// }
