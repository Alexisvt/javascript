/*
  This sample is an illustration of how to use generator 
  when the async method doesn't uses promises, just callbacks
*/

const jsondata = require('./fake-data/users.json');

// fake get user fetching method
const getUsersAsync = (delay, callback) => {
  setTimeout(function () {
    callback(jsondata)
  }, delay);
};

/*
  Currying is when you break down a function that takes multiple arguments into a 
  series of functions that take part of the arguments.

  Transforms a function that takes multiple arguments into a
  function that takes just the last argument of the original function
*/
const curry = (asyncFn, ...args) => {
  return (callback) => {
    args.push(callback);
    return asyncFn.apply(null, args);
  };
};

const controller = (generator) => {

  const it = generator();

  const advancer = ({value, done}) => {
    if (!done) {
      value((json) => advancer(it.next(json)));
    }
  };

  advancer(it.next());
}

// calling the controller with generator function
controller(function* () {
  const usersList = yield curry(getUsersAsync, 1000);
  console.log(usersList[0]);
});