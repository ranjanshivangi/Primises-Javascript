const addition = (a, b) =>
  new Promise((resolve, reject) => {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a + b);
    } else {
      reject("Promise rejected: Not a Number");
    }
  });

addition(1, 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Completed finally");
  });

  /* expected output: 15
                     Numbers are added */