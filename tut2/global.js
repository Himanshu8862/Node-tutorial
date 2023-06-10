const speak = (name) => {
    console.log(`hello, ${name}`);
}
speak("Mario");

// Global Object has some inbuilt methods, like setTimeout and setInterval. Similar to Window Object in browser.
console.log(global);

// global.setTimeout(() => {
//     console.log('in the timeout');
// }, 3000);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);


console.log(__dirname);
console.log(__filename);

// no access to DOM methods
// console.log(document.querySelector); // this will give erroe