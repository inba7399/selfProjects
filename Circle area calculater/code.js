let a
let c
const pi=3.14

document.getElementById("b1").onclick=()=>{
    a=document.getElementById("i1").value
    a=Number(a)
    c=pi*a**2
    document.getElementById("p1").textContent=`area is ${c}`

}
console.log(a)
