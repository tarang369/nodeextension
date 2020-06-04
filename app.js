const fs = require('fs');
//path of directory 
const directoryPath = ('./folder');

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory:' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // renaming the file 
    fs.rename('./folder/' + file, './folder/' + file + '.mp4', error => {
      //handling error
      if (error) {
        return console.log(error);
      }
    })
  });
});
