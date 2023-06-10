const fs = require("fs");

// read and write are async functions

// // reading files
fs.readFile("./tut2/docs/blog1.txt", (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
// console.log("last line")


// // Writing files
// fs.writeFile("./tut2/docs/blog1.txt", "hello world!", () => {
//     console.log("files written");
// })
// // if the files doesnt exist, it is created
// fs.writeFile("./tut2/docs/blog2.txt", "helloooooo", () => {
//     console.log("files written");
// })


// // directories
// if (!fs.existsSync('./tut2/assets')) {
//     fs.mkdir('./tut2/assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder created');
//     });
// } else {
//     fs.rmdir('./tut2/assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('folder deleted');
//     });
// }


// // deleting files
if (fs.existsSync('./tut2/docs/deleteme.txt')) {
    fs.unlink('./tut2/docs/deleteme.txt', err => {
      if (err) {
        console.log(err);
      }
      console.log('file deleted');
    });
  }