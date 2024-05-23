const max=document.getElementById("in1")
const min=document.getElementById("in2")
let dis=document.getElementById("lab")

document.getElementById("but").onclick=()=>{
  let rnum
a=Number(max.value)
b=Number(min.value)
rnum=Math.floor(Math.random()*(a-b))+b
  dis.textContent=rnum
}