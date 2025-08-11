function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
 
  if (taskText === '') return;

  const li = document.createElement('li');  
 
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

const deleteBtn = document.createElement('button');
deleteBtn.innerText = 'Delete';
const span = document.createElement('span');
deleteBtn.className = 'delete';
span.innerText = taskText;

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

 document.getElementById('taskList').appendChild(li);

   checkbox.addEventListener('change', function() {
  li.classList.toggle('completed');
});

deleteBtn.addEventListener('click', function() {
  li.remove();
});

}

    


