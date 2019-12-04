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

# Solution
I created an array and then iterated through each. I also took the original array and used a math method to figure out what the index of the middle value was. On each iteration through the array, I set a value from the original array to the index in the same spot in the new array. I also asked each time if the index was the middle index. When I got to that one, I set the value at that index to the new value needing to be added.