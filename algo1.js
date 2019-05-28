/*
A theater employee want a list of all the seats from the main room. 
In this room, the seats are organized with as following: 
    - There are 26 columns of seats with a number from "1" to "26" 
    - Each column contains 100 seats with a number from "1" to "100"

At the end the list should be like: 
1-1
1-2
1-3
.
.
.
26-98
26-99
26-100

Create the function who returns the array containing all the seat numbers.
*/
module.exports = function total () {
    let columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
    let result = columns.map(function (num) {
        for (let i = 1; 1 < 101; i++ ) {
            console.log(num + ('-') + i);
        }
    });
    console.log(result);
};


total(100);