const btns=document.querySelectorAll("button");
const expression=document.querySelector("#expression")
const result=document.querySelector("#result")


btns.forEach((btn)=>{
  btn.addEventListener("click",calculate);
})

function calculate(){
   const btn_text=this.innerText;
   console.log(btn_text);
   if(btn_text=="="){
    result.innerText=eval(expression.innerText)
   }else if(btn_text=="DEL"){
    expression.innerText=expression.innerText.substring(0,expression.innerText.length-1)
   }else if(btn_text=="AC"){
    expression.innerText="";
    result.innerText=0;
   }else{
    expression.innerHTML+=btn_text;
   }
}