const input = document.querySelector("#input")
const addButton = document.querySelector("#addButton")
const taskList = document.querySelector("#taskList")

addButton.addEventListener("click", toDoList)

function toDoList() {    
        if (input.value === "" ) {
            alert("Yapılacak bir görev yazmalısınız!")
        } else {
            let li = document.createElement('li');
            li.innerHTML = input.value;
            taskList.append(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00d7";
            li.appendChild(span)    ;
        }
        input.value = "";
        saveData();
    }

    taskList.addEventListener("click", function(e) {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
        } else if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
        }
        saveData()
    },false)


    function saveData() {
        localStorage.setItem("data", taskList.innerHTML);
    } 

    function showTask() {
        taskList.innerHTML = localStorage.getItem("data");
    }

showTask();

    
