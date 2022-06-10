// Sum Exists or Not Ended
// Description

// Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

// If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.


// Input
// Input Format :

// The first line of input contains an integer N - denoting size of the array.

// The second line contains the N space seperated integers.

// The third line of input will contain S - the required Sum value.

// Constraints :

// 1<=n<= 18

// 1<=A[i]<=10^9


// Output
// Print "yes" or "no" without quotes.


// Sample Input 1 

// 9
// 1 2 3 4 5 6 7 8 9
// 5
// Sample Output 1

// yes


function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    let sum = +input[2];
    console.log(funl(n,arr,sum)? "YES" : "NO")
   
  }
  function funl(n,arr,sum){
    let dp =[];  
    for(let i=0; i<n+1; i++){
          let col = [];
          for(let j=0; j<n+1; j++){
              
            if(j==0){
                col.push(true)
            }
            else if(i==0&&j>0){
                
                col.push(false)
            }else{
                col.push(-1);
            }
          }
          dp.push(col)
    }
    // console.log(dp)
    for(let i=1;i<n+1; i++){
        for(let j=1; j<sum+1; j++){
            if(arr[i-1]<=j){
                
                dp[i][j]= dp[i][j-arr[i-1]] || dp[i-1][j];
            }else{
                dp[i][j]= dp[i-1][j];
            }
        }
    }
    return dp[n][sum]
     
  }

  if (process.env.USERNAME=== "hriti") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }