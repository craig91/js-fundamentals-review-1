function logLast (arr) {
  console.log(arr[arr.length -1]);
}

logLast(['cat', 'bat', 'rat', 'gnat'])

// this function takes an array as an argument ant then console.logs the arry minus the lenth once, resulting in the last element in the arry being logged out.


function logToTen () {
  for(var i = 0; i <= 10; i++){
    console.log(i)
  }
}

logToTen();

// This function is looping from 1 to 10 and printing it to the console. i <= 10 is saying log out every number that is less than or equal to 10.

function logArr(arr) {
  for (var i = 0; i < arr.length; i++){
    console.log(arr[i])
  }
}

logArr(['apple', 'orange', 'strawberry', 'grape'])

// this function logs out every element in the array. console.log(arr[i]) is saying saying to log out the i counter that is looping though the array. For everytime i is less than the array of the array, log out that element that it is on through each iteration.

function logArrI(arr) {
  for (var i = 0; i < arr.length; i++){
    console.log(i)
  }
}

logArrI(['jack', 'jill', 'jeff', 'jared', 'jason', 'jeffery'])

// this function is similar to logArr but the difference is in the console.log. It is logging just i and in this case if you dont specify the array then i, then it will log out the index of each element.


function sumZeroToTen (arr) {
  var sum = 0;
  for(var i = 0; i <= 10; i++){
    sum += i
  }
  return sum
}

sumZeroToTen();

// this function is looping through an array that will iterate 10 times, the sum variable is capturing each iteration and if you type sum += i then it will add together all the numbers that lead up to 10, thus giving you 55.

function sumArr (arr){
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}

sumArr([1,202,5,99,40])

// this function loops through an array of numbers, and there is a sum counter declared to keep track of the iteratrions. after the loop sum += arr[i] will add the numbers together. if you just put i then it will add the amount of values in the array plus the amount of iterations captured in sum. thus resulting in 10 because there are 5 elements.

function sumArrI (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    console.log(sum)
    sum += i;
  }
  return sum
}

sumArrI([10,20,30,40,50])

// this function is pretty much the same as the one above with the exception that sum += i is adding up the indexes rather than the elements.


function logValOrI (arr){
  for(var i = 0; i < arr.length; i++){
    if(i > arr[i]){
      console.log(i)
    } else {
      console.log(arr[i])
    }
  }
}

logValOrI([12,10,1,2,3,4])

// This function has a conditional that logs out i when the i iterator is greater than the current element in the array. when it is less it will log out the current element in the array. 


function forEachLog(arr) {
  arr.forEach(function(val) {
    console.log(val)
  })
}

forEachLog(['dog', 'cat', 'bat'])

function forEachLog (arr) {
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

forEachLog(['craig', 'chris', 'ayuka', 'kamil'])

// forEach() logs out/ returns the elements of the array. The 2nd function is how the forEach() works without using the forEach() method.
