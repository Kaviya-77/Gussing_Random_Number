
var c=0
function checkFunc(){
var a=document.getElementById("userIn").value
var b=(Math.floor((Math.random())*10))+1
console.log(a)
console.log(b)
if(a==b){
     document.getElementById("resText").textContent="You are Correct ! Go Ahead !!"
      alert("You Won!...")
     document.getElementById("score").textContent=Number(c+1)
     c=c+1
     console.log(c)
}
else{
     document.getElementById("resText").textContent="It's Wrong Try Again!" 
  }
}