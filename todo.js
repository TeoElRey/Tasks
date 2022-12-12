const events = [{
  title: 'Eat',
  dueDate: '2022-12-12',
}, {
  title: 'Web Development',
  dueDate: '2023-1-1',
}, {
  title: 'Exercise',
  dueDate: '2078-8-4'
}];

render();

function addEvent() {
  const textbox = document.getElementById('input');
  const title = textbox.value;
  const datePicker = document.getElementById('date');
  const dueDate = datePicker.value;
  events.push({
    title: title,
    dueDate: dueDate
  });

  render();
}

function render() {
  document.getElementById('todo-list').innerHTML='';

  events.forEach(function (events) {
    const element = document.createElement('div');
    element.innerText = events.title + ' ' + events.dueDate;
    const deleteButton = document.createElement('button');
    deleteButton.innerText ='Delete';
    element.appendChild(deleteButton);
    const todoList = document.getElementById('todo-list');
    todoList.appendChild(element)
  });
}