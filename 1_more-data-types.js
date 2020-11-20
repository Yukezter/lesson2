/* 
=========================================================================================
- undefined
=========================================================================================

When variables or function arguments aren't defined yet or don't exist anymore, JS
automatically assigns them a value of 'undefined'. The keyword 'undefined' is a reserved,
therefore you can't use it as a variable or argument name. 
*/

var someVariable
// At this point, someVariable is 'undefined' since the variable is only declared. It
// has not been defined or assigned a value yet.

console.log('someVariable =', someVariable)

someVariable = 'value'
// someVariable is now defined.

console.log('someVariable =', someVariable)

someVariable = undefined
// You can assign variables a value of 'undefined' yourself, but it's not recommended.

/* 
=========================================================================================
- null
=========================================================================================

Sometimes you might want to intentionally assign a non-existent or empty value to a variable.

The difference between 'undefined' and 'null' is that 'null' actually represents an empty or blank
value while 'undefined' means that a variable has not been defined or assigned a value.

'null' is a reserved keyword, therefore you can't use it as a variable or an argument name.
*/

// Here we define the variable ourselves
// Even though its been defined, it points to nothing. It contains an 'empty' value.
var anotherVariable = null

// Here we set the variable to an object.
anotherVariable = {
  MJ: 23,
}

console.log(anotherVariable.MJ)

/*
=========================================================================================
- Boolean
=========================================================================================

This is just 'true' or 'false' values. These are also reserved keywords.
*/

var bool1 = true
var bool2 = false

// The Boolean function evaluates the value passed in a boolean context and
// returns true or false. Strings will be evaluated as 'truthy' unless they're empty.
// We'll go over what's evaluated as 'truthy' and 'falsy' another time.
var bool3 = Boolean('turn this string to a boolean')
var bool4 = Boolean('')

console.log('bool1:', bool1)
console.log('bool2:', bool2)
console.log('bool3:', bool3)
console.log('bool4:', bool4)

/*
=========================================================================================
- BigInt (new)
=========================================================================================

The BigInt data type is exactly that: a big INTEGER. These are used when you need to deal
with numbers outside of the Number-Type (the default data type for JS numbers) safe zone.
Using BigInt comes with limitations. It cannot be mixed with Number in operations and
can't be used with the built-in Math object (JS provides a Math object with useful functions).
*/

// Number-Type safe zone range (BigInt can represent numbers outside this range)
console.log(
  Number.MIN_SAFE_INTEGER,
  '>= safe numbers >=',
  Number.MAX_SAFE_INTEGER
)

// Can be created by placing an 'n' character after an integer.
var bigInt1 = 420n
// Or by calling the BigInt function and passing the value.
var bigInt2 = BigInt(420)

console.log(typeof bigInt1 + ':', bigInt1)

/*
=========================================================================================
- Symbol (new)
=========================================================================================

A symbol is just a uniquely generated value which is produced by invoking the 'Symbol'
function. One of the few particular use cases for Symbols is avoiding name clashes. You'll probably never (or rarely) use Symbols yourself.
*/

// The Symbol function takes an optional string as its description.
var symbol1 = Symbol()
var symbol2 = Symbol('leva')
var symbol3 = Symbol('leva')

console.log(symbol1, symbol2, symbol3)

// '===' is a comparison 'operator' that returns a boolean value.
// Here, you can see when we compare two of the same strings, they are evaluated as
// being the same, but when we compare two symbols with the same description, they are
// evaluated as different (or falsy).
console.log("are 'leva' and 'leva' equal?", 'leva' === 'leva')
console.log("are Symbol('leva') and Symbol('leva') equal?", symbol2 === symbol3)
