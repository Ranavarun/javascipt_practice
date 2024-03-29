//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}




// one()



//chotha bacha bado sa icecream maang saktha ha par bada nahi kar saktha ha 




if (true) {
    const username = "varun"
    if (username === "varun") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++
//hoisting


console.log(addone(5))//6 error nahi dega

function addone(num){
    return num + 1
}



addTwo(5)//error dega function declare huya ha const ka  sath 
const addTwo = function(num){
    return num + 2
}