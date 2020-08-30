// Define UI Element
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let filter = document.querySelector('#task_filter');
let clearbtn = document.querySelector('#clear_task');
let taskInput = document.querySelector('#new_task');


// Define EventListener

form.addEventListener('submit',AddTask);
tasklist.addEventListener('click',removeTask);
clearbtn.addEventListener('click',clearTask);
// ADD Function

function AddTask(e){
    if(taskInput.value === ''){
        alert('Add A Task');
    }
    else{
        //Create Li Element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);
        taskInput.value = '';

    }
    e.preventDefault();
}

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are You sure")){
          let ele = e.target.parentElement;
          ele.remove();   
        }
    }

}
 function clearTask(){
     tasklist.innerHTML ='';
 }