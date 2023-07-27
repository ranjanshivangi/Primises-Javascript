const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

//Output - Promise {<resolved>: "There is a count value."}

// Example 2: Chaining the Promise with then()


let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue1
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });

    // Output - Promise resolved
    //          You can call multiple functions this way.

    //Example 3: Catch Method
    let countValue3 = new Promise(function (resolve, reject) {
        reject('Promise rejected'); 
     });
     
     // executes when promise is resolved successfully
     countValue3.then(
         function successValue(result) {
             console.log(result);
         },
      )
     
     // executes if there is an error
     .catch(
         function errorValue(result) {
             console.log(result);
         }
     );
     //Output - Promise rejected