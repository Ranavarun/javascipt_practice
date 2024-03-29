// for of 

//array specific loop



//["","",""]
//[{}.{}.{}]


const arr = [1,3,7,434]


for (const num of arr) {

    console.log(num);
    
}


const greeting = "hello world"


for (const greet of greeting) {
    console.log(`each char is ${greet}`);
}



//maps
//key value pair
//UNIQUE AND ORDERED
//give value



const map = new Map()


map.set('IN',"INDIA")
map.set('ENG',"ENGLAND")



for (const [key,value]  of map) {
    console.log(key);
}



const myObject = {
    'game':'nfs',
    'game1':'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key,': ',value);
}