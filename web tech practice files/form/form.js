let form =document.querySelector("#form");
let inpVal1 =document.querySelector("#inpVal1");
let inpVal2 =document.querySelector("#inpVal2");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("form submitted")
    let inp1= inpVal1.value;
    let inp2=inpVal2.value;
    console.log({inp1 , inp2})
})

//!event delegation
let gp=document.getElementById("gp");
let p=document.getElementById("p");
let c=document.getElementById("c");

document.body.addEventListener("click",e=>{
    console.log("Body clicked")
})
gp.addEventListener("click",(event)=>{
console.log(event.target)
console.log("Grand Parent clicked")
event.stopPropagation();
})
p.addEventListener("click",(event)=>{
    console.log(event.target)
    console.log("Parent Clicked");
    event.stopPropagation();
    })

    c.addEventListener("click",(event)=>{
        console.log(event.target)
        console.log("Child clicked")
        event.stopPropagation();
        })

let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
let div3=document.getElementById("div3");
div1.addEventListener("click",e=>{
    console.log(e.target.innerText)
})
div2.addEventListener("click",e=>{
    console.log(e.target.innerText)
})
div3.addEventListener("click",e=>{
    console.log(e.target.innerText)
})
let section =document.querySelector("#section");
section.addEventListener("click",e=>{
    console.log(e.target.innerText)
})


// !show password
let inp =document.querySelector("#psw");
let check =document.querySelector("#check");
let show =document.querySelector("#show");
check.addEventListener("click",e=>{
    console.log(e.target.checked)
    if(e.target.checked === true){
        inp.setAttribute("type","text");
        show.innerText="hide password"
    }else{
        inp.setAttribute("type","password");
        show.innerText="show password" 
    }
})