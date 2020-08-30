// Define UI Element
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let filter = document.querySelector('#task_filter');
let clearbtn = document.querySelector('#clear_task');
let taskInput = document.querySelector('#new_task');


// Define EventListener
document.addEventListener('DOMContentLoaded',getTasks);  
form.addEventListener('submit',AddTask);
tasklist.addEventListener('click',removeTask);
clearbtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
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
        taskLocalstorage(taskInput.value);
        taskInput.value = '';

    }
    e.preventDefault();
}

function removeTask(e){
    if(e.target.hasAttribute("href")){
        if(confirm("Are You sure")){
          let ele = e.target.parentElement;
          ele.remove();   
          removeFromLS(ele);
        }
    }

}
 function clearTask(e){
     tasklist.innerHTML = "";
//      while(tasklist.firstChild){
//          tasklist.removeChild(tasklist,firstChild);
//      }
localStorage.clear();
 }

 function filterTask(e){
     let text = e.target.value.toLowerCase();
     let item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text) != -1 ){
          task.style.display = 'block'
     }else{
         task.style.display = 'none';
     }
     console.log(text);

 }
function taskLocalstorage(task){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
 function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task+ " "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML = 'x';
        li.appendChild(link);
        tasklist.appendChild(li);
        
    });

 }
 function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks')=== null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));

    }
    let li = taskItem;
    li.removeChild(li.lastChild);
    tasks.forEach((task,index) =>{
        if(li.textContent.trim() === task){
            tasks.splice(index,1);
        }
    });
localStorage.setItem('tasks',JSON.stringify(tasks));
 }