const fs = require('fs')

const writeFile = (fileC) => {
    fs.writeFile('./index.html', fileC, (err) =>{
        if(err) {console.log(err)}
        else{ console.log('all is well')}
    })
}
module.exports = writeFile;