let btn = document.getElementById("btn");
let div = document.getElementById("text");
function button(){
    let ele = document.createElement("h1");
    ele.textContent = "HI";
    div.append(ele);
    console.log(ele);
    console.log("HI");
    // alert("hi");
}

 addEventListener("click",btn=>{
    button();
 })

// div.innerHTML="<h1> HEY </h1>";
// console.log(div)


// let ele =document.getElementById("text");
// console.log(ele);
// console.log(ele.innerText);
// console.log(ele.innerHTML);
// console.log(ele.textContent);
// let ele =document.getElementById("text");
// ele.innerText="DIVISION ELEMENT"
// ele.innerText="<h1>DIVISION ELEMENT</h1>" //!not possible
// ele.innerHTML ="<h1>DIVISION ELEMENT</h1> <p>Paragraph</p>"
// ele.textContent="DIVISON ELEMENT"
// console.log(ele);