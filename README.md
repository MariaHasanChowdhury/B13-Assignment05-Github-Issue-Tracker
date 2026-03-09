### 1.What is the difference between var, let, and const?

## Answer:

- var: Function-scoped and can be redeclared and updated.
- let: Block-scoped and can be updated but not redeclared in the same scope.
- const: Block-scoped and cannot be updated or redeclared.

### 2. What is the spread operator (...)?

## Answer:

The spread operator expands elements of an array or object into individual values.

Example:
    const nums = [1,2,3];
    console.log(...nums); // 1 2 3

### 3. What is the difference between map(), filter(), and forEach()?

## Answer:
- map() → Creates a new array by transforming each element.

- filter() → Creates a new array with elements that match a    condition.

- forEach() → Loops through array but does not return a new array.

### 4. What is an arrow function?

## Answer:
An arrow function is a shorter way to write a function in JavaScript.
- Example:

    const add = (a,b) => a + b; 

### 5. What are template literals?

## Answer:
Template literals allow you to embed variables inside strings using backticks ( ).
- Example:

   let name = "Maria";
   console.log(`Hello ${name}`);
   Output:     Hello Maria