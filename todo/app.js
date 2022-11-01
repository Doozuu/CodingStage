const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
let toDos = []; 
const TODOS_KEY = "todos"

function saveToDos(){
localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
const delLi = event.target.parentElement; 
delLi.remove();
toDos = toDos.filter(todo => todo.id !== parseInt(delLi.id));
saveToDos();
}

function paintToDo(newTodo) {
const todoLi = document.createElement("li");
todoLi.id = newTodo.id; // li에 id 부여 
const todoSpan = document.createElement("span"); 
todoSpan.innerText = newTodo.text; 
const button = document.createElement("button"); 
button.innerText = "삭제";
button.addEventListener("click", deleteToDo); 
todoLi.appendChild(todoSpan); 
todoLi.appendChild(button);
toDoList.appendChild(todoLi); 
}

function handleToDoSubmit(event) {
event.preventDefault();
const newTodo = toDoInput.value; 
toDoInput.value = ""; 
const newToDoObj = {   
text: newTodo,
id: Date.now(), 
};
toDos.push(newToDoObj); // 배열에 object 저장  
paintToDo(newToDoObj); // object 보여주기  
saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 입력값이 없을 때에는 null 출력됨.

if(savedToDos !== null){
const parsedToDos = JSON.parse(savedToDos); // 살아있는 배열로 바꿈.
toDos = parsedToDos; // 배열에 기존 데이터 넣어서 보존.
parsedToDos.forEach(paintToDo);
}