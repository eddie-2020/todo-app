import { setToLocalStorage, getFromLocalStorage, reloadToDo } from './storage';
import { refreshStore } from './functions';
import { cacheEvents } from './index';

todoMain();

function todoMain(){
    let inputElement,
    ulElement;

    getElements();
    addListeners();

    function getElements() {
        inputElement = document.getElementsByTagName('input')[0];
        ulElement = document.getElementsByTagName('ul')[0];
    }

    function addListeners() {
        inputElement.addEventListener('change', onChange, false);
    }

    function onChange() {
        let inputValue = inputElement.value;

        inputElement.value = '';

        let liElement = document.createElement('li');
         liElement.innerHTML= `<input type = "checkbox">` + inputValue;
       
        let spanElement = document.createElement('span');
        spanElement.innerText = 'delete';
        spanElement.className = 'material-icons-outlined';
        
        let lineElement = document.createElement('span');
        lineElement.innerText = 'more_vert';
        lineElement.className = 'material-icons-outlined';

        spanElement.addEventListener('click', Click, false);

        liElement.appendChild(spanElement);

        liElement.appendChild(lineElement);

        ulElement.appendChild(liElement);

        function Click(){
            liElement.remove();
        }
    
      }
    };
 window.addEventListener('load', () => {
  const localStore = getFromLocalStorage();
  if (localStore == null) {
    setToLocalStorage(toDoList, true);
    todoMain(toDoList);
  } else {
    const sortedTodo = sortIndex(localStore);
   todoMain(sortedTodo, false);
  }
  reloadToDo();
  todoMain();
});


export { todoMain }
