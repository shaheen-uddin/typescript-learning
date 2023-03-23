"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guiters = ['strat', 'Les Paul', 5120];
let mixedata = ['EVH', 1945, true];
stringArr[0] = 'John';
stringArr.push('ooh');
guiters[0] = 1455;
guiters.unshift('guiter');
mixedata[0] = 'guiter';
mixedata[1] = true;
mixedata[2] = 'ban';
let test = [];
let bands = [];
bands.push('Van halen');
//tuple
let myTuple = ['Dave', 34, true];
let mixed = ['jon', 4, false];
mixed = myTuple;
myTuple[0] = 'shaheen';
myTuple[1] = 89;
myTuple[2] = true;
let myOBJ;
myOBJ = [];
console.log(typeof myOBJ);
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1949, 1971, 'Shaheen']
};
console.log(evh);
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
console.log(jp);
