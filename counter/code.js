const dicbtn=document.getElementById("d")
const incbtn=document.getElementById("i")
const rbtn=document.getElementById("r")
const lab=document.getElementById("lab")
let count = 0

incbtn.onclick=()=>{
    count++
    lab.textContent=count
}
dicbtn.onclick=()=>{
    count--
    lab.textContent=count
}
rbtn.onclick=()=>{ count=0
     lab.textContent=count}