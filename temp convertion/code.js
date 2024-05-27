let input=document.getElementById("in1")
let f=document.getElementById("f")
let c=document.getElementById("c")
let result=document.getElementById("result")
let temp

document.getElementById("b1").onclick=()=>{
  if(f.checked){
   temp=Number(input.value)
   temp=temp*9/5+32 
   result.textContent=temp.toFixed(1)+"°F"
  }
  else if(c.checked){
   temp=Number(input.value)
   temp=(temp-32)*(5/9) 
   result.textContent=temp.toFixed(1)+"°C"
  }
  else{
   result.textContent="Select a unit!"
  }
}