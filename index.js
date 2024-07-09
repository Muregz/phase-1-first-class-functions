const receivesAFunction = (callback) => {
    callback();
};
const returnsANamedFunction = () => {
    const namedFunction = function innerFunction() {
          console.log('Named function called');
    };
    return namedFunction;
};
const myFunction = returnsANamedFunction();
myFunction(); 
const returnsAnAnonymousFunction = () => {
        return () => {
        console.log('Anonymous function called');
    };
};

