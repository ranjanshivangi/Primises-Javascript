const promise1 = new Promise((resolve, reject) => {
    console.log("inside promise1 method");
    setTimeout(resolve, 300, "resolved1");
  }); //will be resolved after 300ms
  
  const promise2 = 93; //non-promise
  
  const promise3 = new Promise((resolve, reject) => {
    console.log("inside promise3 method");
    setTimeout(resolve, 100, "resolved3");
  }); // will be resolved after 100ms
  
  Promise.all([promise1, promise2, promise3])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("end of program");
  //expected output: [ 'resolved', 93, 'resolved2' ]