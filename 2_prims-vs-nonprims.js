/*
We've finally touched on all the data types
  - Number
  - String
  - Symbol
  - BigInt
  - undefined
  - null

Read: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

In the last lesson, I mistakely presented arrays and objects as data types.
You'll notice that objects, arrays, and functions are NOT data types.
They're 'structural types', aka data structures.

All data types are primitive values while the structual types are non-primitive.
Arrays and functions are actually just objects under the hood. So, essentially any
non-primitive value is an object at its core.

What's the difference between primitive and non-primitive?
In short, the way the data is stored.

When you set a variable to a primitive value (i.e. a string), the value is stored
directly in the location the variable accesses.

When you set a variable to a non-primitive value (i.e. an object), a reference value
or 'pointer' is stored in the location the variable accesses. This reference value
'points' to a location in memory (namely, the heap) where the object is stored.

Here's an example to make it clearer.
*/

var str1 = 'a string'

// The variable str2 stores a copy of the VALUE of str1 somewhere else in memory.
var str2 = str1

str1 = 'a new string'

console.log('str1: ', str1)
console.log('str2: ', str2)

/*
The two variables print out different strings since str1 was changed.

Let's try this with a non-primitive
*/

var obj1 = {
  time: 420,
}

// The variable obj2 just stores a copy of the REFERENCE VALUE of obj1.
var obj2 = obj1

obj1.time = 420.69

console.log('obj1.time: ', obj1.time)
console.log('obj2.time: ', obj2.time)

/*

obj1.time and obj2.time are the same because obj1 and obj2 are the same REFERENCE
VALUE, therefore point to the same data in memory. So, when obj1 was mutated, obj2
was also mutated since they're both pointing to the same memory address.

Learn more about the differences here:
https://developer.mozilla.org/en-US/docs/Glossary/Primitive
https://flaviocopes.com/difference-primitive-types-objects/
https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value
*/
