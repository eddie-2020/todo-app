import './styles.css';
import { checkEvent, currentChecks } from './storage';
import { setEventToLocalStorage, getEventFromLocalStorage } from './functional';

// Array Of Event Tasks To Do
const eventList = [
  {
    description: 'Play video games',
    completed: false,
    index: 0,
  },
  {
    description: 'Go Shopping',
    completed: true,
    index: 1,
  },
  {
    description: 'Cook Dinner',
    completed: false,
    index: 2,
  },
  {
    description: 'Listen to music',
    completed: true,
    index: 3,
  },
  {
    description: 'Read Novels',
    completed: false,
    index: 4,
  },
];

// Add Events To List
const addToEvent = () => {
  if (getEventFromLocalStorage() === null) {
    setEventToLocalStorage(eventList);
  } else {
    const sortedEventList = getEventFromLocalStorage().sort((a, b) => a.index - b.index);
    sortedEventList.sort((x, y) => x.index - y.index);
    for (let i = 0; i < sortedEventList.length; i += 1) {
      if (sortedEventList[i].completed === true) {
        checkEvent(sortedEventList[i].index, true);
      } else {
        checkEvent(sortedEventList[i].index, false);
      }
      // create list item
      const listEventItems = document.querySelector('.eventList');
      listEventItems.insertAdjacentHTML(
        'beforeend',
        `
          <div class="task">
            <div class="checks">
              <input type="checkbox" name="item-${sortedEventList[i].index
}" class="checkbox" ${sortedEventList[i].completed ? 'checked' : ''}>
              <span class="checkmark" ${sortedEventList[i].completed
    ? 'style="text-decoration: line-through"'
    : ''
}>${sortedEventList[i].description}</span>
            </div>
            <div class="material-icons-outlined">more_vert</div>
          </div>
        `,
      );
      checkEvent();
    }
  }
};

window.onload = () => {
  currentChecks(eventList);
  addToEvent();
  getEventFromLocalStorage(eventList);
  setEventToLocalStorage(eventList);
};

export default { addToEvent };
