// singleton by constructor
// Object.create literat singleton 

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "varun",
    "full name": "varun rana",
    [mySym]: "mykey1",
    age: 18,
    location: "noida",
    email: "varun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// access objeCT DOT . , SQUARE BRACKET 
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) change nahi karsakth a
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);



//funtion in object  treat as type one citizen as variable
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());