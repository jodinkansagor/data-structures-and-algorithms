# data-structures-and-algorithms

# Reverse an Array
Take any array and reverse it.

## Challenge
Reverse an array

## Approach and Efficiency
Thought that map made sense because we had an array and wanted another array of the same size. Turns out that I can't use map. So I redid this with a for loop.

## Solution
Take an array. Check out how long it is. Reset the index of each value of the array based on 1 minus the length minus the current index.

# Shift an Array

## Challlenge
Take an array and add a give number in to the middle index without using any array methods.

## Approach
It seems as though the only way to iterate through this array without array methods would be to use a for loops. Additionally, since you can't change the array itself, we needed to create a new empty array and put set the indices of that array to the values in the current array.

## Solution
I created an array and then iterated through each. I also took the original array and used a math method to figure out what the index of the middle value was. On each iteration through the array, I set a value from the original array to the index in the same spot in the new array. I also asked each time if the index was the middle index. When I got to that one, I set the value at that index to the new value needing to be added.

# Linked List

## Challenge
Create two classes. One class defines the nodes in the list. The second last defines the list itself. The list class should also have methods on it for inserting a node, returning true/false depending on whether or not a value is in the list, and stringifying the entire list.

## Approach
I first started this by researching what a linked list was. We had some readings about them, but I wasn't sure of the syntax. I think laid out the basic structure of the class as I understand it, with constuctors and method names. I then began to set up tests so that I can get feedback about my functions. I am trying to look at this from a simple input / output sort of model. What do I have? What do I need it to become? What do I need to do to get it there?



## Solution
It seems as though a linked list is simply an object with fields relating to the value and the next item in the list. I started out creating the classess with their constructors, creating a node with a value and a next, and then creating a linkedlist with a head and a length starting at 0.

To create the insert method, I instatiated a new node, set the new node equal to the head, set the head equal to the new node and then increaed the length. I am shakey on the mechanics, but this seems to be a very common pattern in linked lists.

Includes simply checks to see if a value is there and returns true if it is and false if it isnt using a while loop.

For toString, I first converted the list to an array and then used the built in toString method on that array. To convert the list to an array, I again used the while loop and pushed each value into a new array.

# Insertions

## Challenge

## Approach

## Solution

# Kth from end

## Challenge
Write a method that takes a number as an input. The output is the node's value that is k from the end of the list

### Tests
1. k is greater than the length of the linked list (error)
2. k and the length are the same
3. k is not a positive number (error)
4. linked list the size of 1
5. ks is not at the end but somewhere in the middle

## Approach
I think you can use this.length to figure out how long the list is and then find a node subtracting back from the total length. See white board.


## Solution

# Bracket Validator

Challenge - create a function that validates matching brackets. The function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets: {}, (), [].

## Approach
Seed the stack with a dummy node. Check if the next item in the string is the buddy to what is on the top of the stack. If it is, pop that item from the stack. If it is not, push that to the top of the stack and repeat.

At the end, if there is only the dummy node on the stack, return true. If anything else is there, return false.