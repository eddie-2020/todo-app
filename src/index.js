import './styles.css';
import eventDisplayList from './functional';

export const eventList = document.querySelector('#event-data');
const data = [
  {
    description: 'Play video games',
    completed: false,
    index: 1,
  },
  {
    description: 'Listen to music',
    completed: true,
    index: 2,
  },
  {
    description: 'Go Shopping',
    completed: false,
    index: 3,
  },
  {
    description: 'Go to the gym',
    completed: true,
    index: 4,
  },
];

export const events = data.sort((a, b) => {
  const indexA = a.index;
  const indexB = b.index;

  if (indexA < indexB) {
    return -1;
  }
  if (indexA > indexB) {
    return 1;
  }
  return 0;
});

window.addEventListener('load', eventDisplayList(events, eventList));