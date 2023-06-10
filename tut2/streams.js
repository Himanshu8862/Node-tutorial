const fs = require('fs');

const readStream = fs.createReadStream('./tut2/docs/blog3.txt', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./tut2/docs/blog4.txt');

// whenever a new chunk of data is seen then do something
// readStream.on('data', chunk => {
//   // console.log('---- NEW CHUNK ----');
//   // console.log(chunk);
//   writeStream.write('\nNEW CHUNK:\n');
//   writeStream.write(chunk);
// });


// // piping - only works from readStream to writeStream
readStream.pipe(writeStream);