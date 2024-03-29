// Immediately Invoked Function Expressions (IIFE)
//database connectivity 
//global scope sa pollution nahi chaiya


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
