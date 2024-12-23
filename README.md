# Unexpected String Concatenation When Adding Numbers

This repository demonstrates a common, yet subtle, error in JavaScript related to type coercion and the handling of null and NaN values within arithmetic operations. The primary issue lies in the implicit type conversion when non-numeric strings are used in arithmetic operations. 

## Problem

The provided JavaScript code aims to add two numbers, handling cases where either input might be `null` or `NaN`. However,  when one of the inputs is a string that can be parsed as a number, the behavior might not be as intuitive as expected. In the `bug.js` file you'll observe that the sum of a numeric string and a number results in unexpected string concatenation instead of numeric addition.

## Solution

The `bugSolution.js` file provides a corrected version.  It explicitly converts inputs to numbers using `Number()` before performing addition, thereby guaranteeing consistent numeric behavior even when dealing with string inputs that represent numbers.