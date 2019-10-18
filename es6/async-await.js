const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(((resolve, reject) => {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  }));
};

const gen = function () {
  const f1 = readFile('./var/test.txt');
  const f2 = readFile('./var/test1.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};

console.log(gen.next());
