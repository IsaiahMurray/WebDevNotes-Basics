//! The shift method removes the first element from an array 
//! and returns that removed element. 
//! This method changes the length of the array.

const foods = [
    { name: "bread", price: 100 },
    { name: "beef", price: 200 },
    { name: "mint", price: 10 },
    { name: "shrimp", price: 5 },
    { name: "ketchup", price: 500 },
    { name: "bell pepper", price: 25 },
  ];
//1
console.log("Before: ",foods);
//2
const firstObject = foods.shift();
//3
console.log("After: ",foods);
//4
console.log("Shifted Item: ",firstObject);

/* 
! 1 => In the before, we see the entire array as we created it

! 2 => We call the .shift method and remove the first item

! 3 => In  the after, we see that the array is now missing that first item

! 4 => Here we can see that first item we removed and that it is now completely separated from the array
*/