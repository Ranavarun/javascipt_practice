const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);
console.log(descriptor);

const chai = {
    name:'ginger chai',
    price:250,
    isAvliable:true,


    orderChai:function()
    {
        console.log("chai order karo");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));



Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false
})




for(let [key,value] of Object.entries(chai))
{
    if(typeof value !== 'function')
    console.log(`${key}: ${value}`);
}