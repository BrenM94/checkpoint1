/*
 Given a number N return the index value of the Fibonacci sequence.
 Ex: fibo(6)  // return 13;
 Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let a = 1, b = 0, index;

    while (num >= 0){
      index = a;
      a = a + b;
      b = index;
      num--;
    }
  
    return b;
}
