// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// var b = [1, 2, 3, 4, 5];

//  to know the index of an element in an array
//  var i = a.indexOf("xyz");
//  console.log(i);

// -1 if comes to show no array of that type exists so if statement comes
// var i = a.indexOf("qwe");
// if (i != -1) {
//   console.log("word found");
// } else {
//   console.log("word not found");
// }

// to count/know the length of an array
// var count = a.length;
// console.log(count);

// to count/know the last index of an array
// var count = a.length;
// var lastIndex = count - 1;
// console.log(a[lastIndex]);

// more refined method
// var lastElement = a.slice(-1);
// console.log(lastElement);

// for reversing the elements of an array
// var rev = a.reverse();
// console.log(rev);

// for combining all elements of array
// var combineletters = a.join("$");
// console.log(combineletters);

// for combining two arrays
// var combinearrays = a.concat(b);
// console.log(combinearrays);

//to know if an element exist in an array or not
// var exist = a.includes("qwe");
// var exist = a.includes("abc");
// console.log(exist);

// to know index of a repeated element
// var i = a.lastIndexOf("abc");
// console.log(i);

// for loops have 3 parts
// 1.Initialization 2.limitations 3.Iterations
// for (var i = 0; i < 10; i++);
// {
//   console.log(i);
// }

// for looping the values of an array
// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// for (var i = 0; i < 10; i++) {
//   console.log(a[i]);
// }
// for removing undefined
// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// for (var i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }

// for test
// var a = ["abc", "kjl", "yut", "omn", "abc", "mno", "xyz"];
// var b = ["yut"];
// for (var i = 0; i < a.length; i++) {
//   //   console.log(b[i]);
//   if (a[i] === b[0]) {
//     console.log("present", i);
//   }
// }

// for loop nested
// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }

// test no 2 done
// var a = ["A", "B", "C", "D", "E"];
// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var c = [];

// for (var i = 0; i < a.length; i++) {
//   for (var j = 0; j < b.length; j++) {
//     c.push(b[j] + a[i]);
//     // console.log(b[j],a[i]);
//   }
// }
// console.log(c);

// // output will be like
// // 1A, 1B, 1C, 1D, 1E, 2A
