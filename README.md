# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bocajbee/lotide`

**Require it:**

`const _ = require('@bocajbee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* AssertArraysEqual(arr1, arr2): function to see if both arrays fed into it match
* eqArrays(arr1, arr2): loops through 2 arrays at once and checks if they match
* countLetters(string): function to keep count of how many times a letter in a string appears
* assertObjectsEqua(actual, expected): function to see if both objects fed into it have identical keys with identical values.
* countOnly(allItems, itemsToCount): function that takes in an array of names as its first argument, and an object to log how many times those names appear in said array
* head(arr): returns the first index of any array you pass in
* tail(arr): returns all indexes after index 0 of an array you pass in
* more functions ot be refactored and added later. Coming soon...