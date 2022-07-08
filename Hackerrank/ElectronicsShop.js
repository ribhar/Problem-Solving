// A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return .

// Example



// The person can buy a , or a . Choose the latter as the more expensive option and return .

// Function Description

// Complete the getMoneySpent function in the editor below.

// getMoneySpent has the following parameter(s):

// int keyboards[n]: the keyboard prices
// int drives[m]: the drive prices
// int b: the budget
// Returns

// int: the maximum that can be spent, or  if it is not possible to buy both items
// Input Format

// The first line contains three space-separated integers , , and , the budget, the number of keyboard models and the number of USB drive models.
// The second line contains  space-separated integers , the prices of each keyboard model.
// The third line contains  space-separated integers , the prices of the USB drives.

// Constraints

// The price of each item is in the inclusive range .
// Sample Input 0

// 10 2 3
// 3 1
// 5 2 8
// Sample Output 0

// 9
// Explanation 0

// Buy the  keyboard and the  USB drive for a total cost of .

// Sample Input 1

// 5 1 1
// 4
// 5
// Sample Output 1

// -1
// Explanation 1

// There is no way to buy one keyboard and one USB drive because , so return .


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    keyboards.sort((a,b)=>a-b)
    drives.sort((a,b)=>a-b)
    let max = 0;
    for(let i=0; i<keyboards.length; i++){
        
        for(let j=0; j<drives.length; j++){
            let sum = keyboards[i]+drives[j]
            if(sum<=b && sum>max){
                max = sum
            }
        }
    }
    return max? max : -1
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}
