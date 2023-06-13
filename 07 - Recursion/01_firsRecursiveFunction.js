/*
        HOW RECURSIVE FUNCTIONS WORK

1)    Invoke the SAME function with a DIFFERENT input until you 
      reach your base case;

2)    Base Case: The CONDITION when the recursion ENDS*;
        *this is the most important concept to understand

3)    Two essential parts of a recursive function:
      3.1) Base case: this is where the recursion stops;
      3.2) Different input: each time the function is called 
      it has do recieve a different input;
    */

function countdown(num) {
  if (num <= 0) {
    console.log("All Done!");
    return;
  }
  console.log(num);
  num--;
  countdown(num);
}
countdown(0);
countdown(-2);
countdown(22);
