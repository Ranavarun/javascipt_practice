//this in object refer the  current context
//arrow function ma this nahi hotha ha 




const user = {
    username: "varun",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()  //varun welcome website
// user.username = "sam" 
// user.welcomeMessage()  //sam welcome website

// console.log(this); // node=>{} empty   brower=>window

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);   // in function this in node  refer the global value 
//     console.log(this)//undefined      }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {                     //arrow function
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //without return chal jayagie implicit return 

const addTwo = (num1, num2) => ({username: "hitesh"})   //object return without return keyword


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()