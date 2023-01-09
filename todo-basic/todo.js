// model section
let events;
const savedEvents = JSON.parse(localStorage.getItem('tasks'));
if((Array.isArray(savedEvents))) {
  events = savedEvents;
} else {
  events = [{
    title: 'Eat',
    dueDate: '2022-12-12',
    id: 'id1',
  }, {
    title: 'Web Development',
    dueDate: '2023-1-1',
    id: 'id2',
  }, {
    title: 'Exercise',
    dueDate: '2078-8-4',
    id: 'id3'
  }];
}

render();
// creates a todo
function createTodo(title, dueDate, id) {
  events.push({
    title: title,
    dueDate: dueDate,
    id: id,
  });

  saveList();
}

// deletes a todo
function deleteTodo(idToDelete) {
  events = events.filter(function (todo) {
    if(todo.id === idToDelete) {
      return false;
    } else {
      return true;
    }
  });

  saveList();
}

function saveList() {
  localStorage.setItem('tasks', JSON.stringify(events));
}

// view section
function render() {
  document.getElementById('todo-list').innerHTML='';

  events.forEach(function (events) {
    const element = document.createElement('div');
    element.innerText = events.title + ' ' + events.dueDate;
    const deleteButton = document.createElement('button');
    deleteButton.innerText ='Delete';
    deleteButton.style='margin-left: 12px';
    deleteButton.style='border-radius: 10px';
    deleteButton.onclick = deleteEvent;
    deleteButton.id = events.id;
    element.appendChild(deleteButton);
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element);
  });
}
// controller section
function addEvent() {
  const textbox = document.getElementById('input');
  const title = textbox.value;
  const datePicker = document.getElementById('date');
  const dueDate = datePicker.value;
  const id = '' + new Date().getTime;
  createTodo(title, dueDate, id);
  render();
}

function deleteEvent(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id;

  deleteTodo(idToDelete);
  render();
}