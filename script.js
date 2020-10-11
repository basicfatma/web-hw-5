let addToDoButton = document.getElementById('addtodo');
let ToDoContainer = document.getElementById('todocontainer');
let inputFeild = document.getElementById('inputFeild');

addToDoButton.addEventListener('click', function(){
let paragraph = document.createElement('p');
paragraph.classList.add('paragraph-styling');
paragraph.innerText =  inputFeild.value ;
ToDoContainer.appendChild(paragraph);
inputFeild.value = "";
paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
}) 
paragraph.addEventListener('dblclick', function(){
    ToDoContainer.removeChild(paragraph);
})
})

/* double click to remove  */
/* اضغط مره وحده عشان يطلع خط يعني انت خلصته*/ 