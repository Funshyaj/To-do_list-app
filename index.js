let form = document.forms
form = form[0]

form.addEventListener("submit", (e)=>{
e.preventDefault()
let list =  document.querySelector(".tasks-ul")
let value = form.querySelector("input").value

console.log(value)
// create elements
let li = document.createElement('li');
let span = document.createElement('span');
let checkBox = document.createElement('input');

//add attributes
li.classList.add("tasks");
span.classList.add("task-texts");
span.innerHTML = value;
checkBox.type = "checkbox";

//appending
li.appendChild(span)
li.appendChild(checkBox)
if (value !== ""){
    list.appendChild(li)
}
})

//checkbox coloring code
let checkbox = document.querySelectorAll(".tasks-ul");
checkbox.forEach(check =>{
       check.addEventListener("change", function(e) {
   let span = e.target.parentElement
span.classList.toggle("active")
        })
})