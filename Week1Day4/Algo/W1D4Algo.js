/* 
Given an array and an item to search for,
return the index where the item is found,

return -1 to represent not found

*/

var arr1 = ["a", "b", "c"];
var searchItem1 = "c";
var expected1 = 2;

var arr2 = ["a", "b", "c"];
var searchItem2 = 5;
var expected2 = -1;

var arr3 = ["c", "a", "b", "c"];
var searchItem3 = "c";
var expected3 = 0;

var arr4 = [];
var searchItem4 = 5;
var expected4 = -1;

/**
 * Finds the index from the given array where the given item is found.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} searchItem The item to find.
 * @returns {number} The index of found item, or -1 if not found.
 */
function indexOf(items, searchItem) {
    // code here
}

// Tests
var result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

var result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

var result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

var result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);