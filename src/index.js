import './styles.css';
import { sortIndex } from './functions';
import { setToLocalStorage, getFromLocalStorage, reloadToDo } from './storage';
import { todoMain } from './addremove';
const toDoList = [];

// cacheEvents list
const cacheEvents = (toDoList, sort) => {
  let sortedTodo = [];
  if (sort) {
    sortedTodo = toDoList.sort((a, b) => a.index - b.index);
  } else {
    sortedTodo = toDoList;
  }

  for (let i = 0; i < sortedTodo.length; i += 1) {
    let style = '';
    let checkbox = '';
    if (sortedTodo[i].completed) {
      style = 'text-decoration: line-through;';
      checkbox = 'checked';
    } else {
      style = 'text-decoration: none;';
      checkbox = '';
    }
    // create list item
    const list = document.createElement('example');
    list.innerHTML += `<div class="eventTask">
          <div class="eventChecks">
            <input type="checkbox" name="item-${sortedTodo[i].index}" ${checkbox}>
            <label for="item-${sortedTodo[i].index}" style="${style}" contenteditable=true>${sortedTodo[i].description}</label>
          </div>
          <div class="buttons-end">
            <span class="material-icons-outlined delete" id="item-${sortedTodo[i].index}">delete_outline</span>
            <div class="material-icons-outlined">more_vert</div>
          </div>
        </div>`;


        let spanElement = document.createElement('span');
        spanElement.innerText = 'delete';
        spanElement.className = 'material-icons-outlined';

      list.addEventListener('dblclick', onDblClick, false);
      document.querySelector('.list').appendChild(list);

         function  onDblClick() {
            this.remove();
        }
  }
};

window.addEventListener('load', () => {
  const localStore = getFromLocalStorage();
  if (localStore == null) {
    setToLocalStorage(toDoList, true);
    cacheEvents(toDoList);
  } else {
    const sortedTodo = sortIndex(localStore);
    cacheEvents(sortedTodo, false);
  }
  reloadToDo();
  addToDo();
  editToDo();
  clearAll();
});

export { toDoList, cacheEvents };