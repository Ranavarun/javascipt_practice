
// promise is object 
//CRETATION

const promiseOne = new Promise((resolve,reject)=>{
    //do and async task
    //db calls,cryptography,network

  setTimeout(function(){
    console.log('Async task is completed');
    resolve()
  },1000)

})


promiseOne.then(function(){
    console.log("promise consumed");
})


// //consumption

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async task 2 is completed');
        resolve()
    },1000)}).then(()=>{
        console.log("Async 2 reolved");
    })





const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
}).then((user)=>{
    console.log(user);
})





const promiseFour = new Promise(function(resolve,reject){
          setTimeout(()=>{
            let error = false
            if (!error)
            {
                resolve({
                    username:"varun",
                    password:"123"
                })
            }
            else
            {
                reject('Error:something went wrong')
            }
          },1000)
})




// //chaining 
promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
.then((userName)=>{
 console.log(userName);
})
.catch((error)=>{
   console.log(error);
}).finally(()=>{
    console.log("the promise is either completed or rejected");
})
    



//
const promiseFive = new Promise((resolve,reject )=>{
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"javascript",password:"123"})
        }
        else
        {
            reject('error:js went wrong')
        }

    },1000)
});

//async directly cannot handle error
async function consumePromiseFive(){
    try{
   const response =  await  promiseFive
   console.log(response)
    }

catch(error)
{
    console.log(error);
}

}

consumePromiseFive()



async function getAllUser(){
    try{
        const respone = await  fetch('https://jsonplaceholder.typicode.com/users')
   const data = await respone.json()
   console.log(data);
}
catch(error)
{
console.log("e: ",error);
}
}


getAllUser()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{console.log(data)}).catch((error)=>{
    console.log(error);
})
