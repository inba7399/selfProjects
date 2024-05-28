let hint=document.getElementById("hint")
document.getElementById("b1").onclick=()=>{
    hint.textContent="the number is between 1 to 100"
}
const a=Math.floor(Math.random()*100)+1
document.getElementById("b2").onclick=()=>{

let number=Number(document.getElementById("in1").value)
let dis=document.getElementById("result")

    if(number<a){
        dis.textContent="Too loo! try agan"
    }
    else if(number>a){
        dis.textContent="Too high! try agan"
    }
    else{
        dis.textContent=`you guessed currect!!! `
    }
    
}
