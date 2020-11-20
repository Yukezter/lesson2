/*
=========================================================================================
- Function
=========================================================================================

Functions are the back-bone of this language. Among many other things, it provides a way of
encapsulating your code, running it at your discretion, and reusing it!

There are two types of functions: regular functions and arrow functions (new). These both have
important differences. For now, we're going to focus on regular functions.

Let's say you wanted to write a function that prints out a greeting.
*/

var someFunction = function () {
  console.log('Hi, my name is Milkweed!')
}

someFunction()

/* 
Regular functions are created by using the 'function' keyword followed by empty parenthesis and
curly braces. The parenthesis are where function 'arguments' go (separated by commas if there are
multiple). In this case, there aren't any because we don't need any. The 'block' of code that
the function will execute goes between the curly braces. To 'call' or 'invoke' a function, you 
would use the name of the function followed by parenthesis containing its corresponding arguments.

Now, make a function with arguments make it the greeting a little more dynamic.
*/

var dynamicGreeting = function (name) {
  console.log('Hi, my name is ' + name + ' .')
}

dynamicGreeting('Bryan')
dynamicGreeting('George')
dynamicGreeting('Meech')

/*
'name' can be anything we pass in when we call the function.

Here's another example with a DEFAULT argument value in case it isn't defined.
*/

var funcWithDefaultName = function (name = 'Bond... James Bond') {
  console.log('Hi, my name is ' + name + ' .')
}

funcWithDefaultName()
funcWithDefaultName('Slim Shady')

/*
This time the name variable defaults to 'Bond... James Bond' when there is no argument provided.
This ensures the value is always defined. However, this still doesn't ensure the value passed in
is a string. We can check this by using what we call a 'conditional statement', which we'll
learn more about soon.
*/

var funcWithConditional = function (name = 'Bond... James Bond') {
  // this is called an if statement
  // this says: if 'name' is a string, then run the code in the curly braces
  if (typeof name === 'string') {
    console.log('Hi, my name is ' + name + ' .')
  }
}

funcWithConditional('Chuck Norris')
// this won't print a greeting, since the argument isn't a string
funcWithConditional(69)

/*
Functions can also 'return' a value too.

Let's say you wanted to make a function that raises a number to the third power.
*/

var cubed = function (num) {
  return num * num * num
}

console.log(cubed(3))

/*
At this point, you've learned about all the data types and structural types and
some of their differences. In the next lesson, we'll cover variable keywords (var,
let, and const), execution context, scope, and objects (a deeper dive).

Read more: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
*/
