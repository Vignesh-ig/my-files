let form=document.querySelector("#new_inp_form");
let input=document.querySelector("#task_inp_value");
let list_ele=document.querySelector("#tasks");

form.addEventListener("submit",e=>{
    e.preventDefault();
    const inputValue = input.value;
    // console.log(inputValue);
    window.localStorage.setItem("todo",inputValue);
    if(!inputValue){
        alert("please fill out the field...");
        return;
    }

    let task_ele=document.createElement("div");
    task_ele.classList.add("task");

    let content_ele=document.createElement("div");
    content_ele.classList.add("content");

    let input_ele=document.createElement("input");
    input_ele.type="text";
    input_ele.classList.add("text");
    input_ele.value=inputValue;
    input_ele.setAttribute("readonly","readonly");

    content_ele.appendChild(input_ele);
    task_ele.append(content_ele);

    let action_ele=document.createElement("div");
    action_ele.classList.add("actions");

    let edit_btn = document.createElement("button");
    edit_btn.classList.add("edit");
    edit_btn.innerText="Edit";
    let delete_btn = document.createElement("button");
    delete_btn.classList.add("delete");
    delete_btn.innerText="Delete";


    action_ele.appendChild(edit_btn)
    action_ele.appendChild(delete_btn)
    task_ele.append(action_ele);

    list_ele.append(task_ele);
    input.value="";

    // !edit
    edit_btn.addEventListener("click",e=>{
       if(e.target.innerText.toLowerCase() == "edit"){
        input_ele.removeAttribute("readonly");
        input_ele.focus();
        edit_btn.innerText="Save"
       }else{
        input_ele.setAttribute("readonly","readonly");
        edit_btn.innerText="Edit"
       }
    })

    // !delete
    delete_btn.addEventListener("click",e=>{
        list_ele.removeChild(task_ele)
    })
})