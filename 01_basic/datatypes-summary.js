




// primitive datatype 


//7 types: String NUMBER ,BOOLEAN,NULL,UNDEFINED,SYMBOL,BIGINT


const  score = 100
const  scoreValue = 100.3


const isLoggedin = false;
const ousideTemp = null; //type of null is object 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);//false




//REFERNCE TYPE(NON PRIMITIVE) type of is object 
// ARRAY ,OBJECT,FUNCTION



const Hero = ["a","c","d"];
let obj = {
    name:"varun",
    age:22
}



// stack(primitive) ,heap(Non-primitive)
//stack is copy
//heap is original one


let myNAME="VARUN"
let anothername =  myName
anothername= "rana"


console.log(myNAME);
console.log(anothername);




let userone = {
    email:"123@gamil.com"

}

let usertwo = userone;

userone.email="12324@gmail.com"


