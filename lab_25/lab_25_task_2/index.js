let fs = require('fs').promises;

fs.readFile('./info.txt', 'utf-8').then(fileContent => {
    console.log(fileContent);
}).then(() => {
    fs.writeFile('./info.txt', '\nNew line', {flag: 'a'});
})
