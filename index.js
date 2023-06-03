// reference to HTML 
const taskInput = document.getElementById("listInput");
const addButton = document.getElementById("btnAdd"); 
const taskList = document.getElementById("listItem");
const sortButton = document.getElementById("btnSort"); 

// add event listener to button
addButton.addEventListener("click", addTask)

// load task from local storage when loading
document.addEventListener('DOMContentLoaded', loadTasks)


// declare array 
let toDoList = []; 

// function add task 
function add(){
    let task = {
        id: "", 
        name: taskInput.value.trim(), 
        createdDate: "", 
        completed: ""
        
    }
    toDoList.push(task) 
    
    if (task === ''){
        return 
    }

}
