export default function eventDisplaylLst(events, list) {
  events.forEach((eventTask) => {
    const li = document.createElement('li');
    const text = `<div class="list-container"> <input type='checkbox' class='check-input' value='${eventTask.completed}' aria-label='...'>
    <p class="todo-text">${eventTask.description}</p><a class="del-menu" href="#"><i class="fas fa-ellipsis-v"></i></a></div>`;
    li.classList.add('list-item');
    li.innerHTML = text;
    list.appendChild(li);
  });
}
