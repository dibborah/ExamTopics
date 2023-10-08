let arr = [4,6,8,9,12,24];

//  let a = arr[0];
//  let b = arr[1];
//  let c = arr[2];

// let [a, ,c ,...rest] = arr;
//  console.log(a,c, rest);

let {a, b} = {a:1, b:2};
// console.log(a, b);

let arr2 = [4,6,7];
let obj1 = {...arr2};
console.log(obj1);

function sum(v1,v2,v3){
    return (v1 + v2 + v3);
}

console.log(sum(...arr2));

let obj2 = {
    name: "dib",
    company : "Taazaa",
    address : "Noida"
}

// console.log({...obj2,name:"harry", company : "TCS"});//This will override the existing values
// console.log({name:"harry", company : "TCS",...obj2});//This will not  override the existing values