// import { getEventFromLocalStorage, setEventToLocalStorage } from './functional';

// const checkEvent = () => {
//   const eventCheckboxes = document.querySelectorAll('input[type=checkbox]');

//   for (let i = 0; i < eventCheckboxes.length; i += 1) {
//     const eventTasks = eventCheckboxes[i].nextElementSibling;

//     eventCheckboxes[i].addEventListener('change', () => {
//       if (eventCheckboxes[i].checked) {
//         eventTasks.style.textDecoration = 'line-through';
//       } else {
//         eventTasks.style.textDecoration = 'none';
//       }
//       const eventList = getEventFromLocalStorage();
//       eventList[i].completed = eventCheckboxes[i].checked;
//       setEventToLocalStorage(eventList);
//     });
//   }
// };

// const currentChecks = () => {
//   const eventCheckboxes = document.querySelectorAll('input[type=checkbox]');

//   eventCheckboxes.forEach((checkbox) => {
//     if (checkbox.checked) {
//       localStorage.setItem(checkbox.id, 'checked');
//     } else {
//       localStorage.setItem(checkbox.id, 'unchecked');
//     }
//   });

//   eventCheckboxes.forEach((checkbox) => {
//     if (localStorage.getItem(checkbox.id) === 'checked') {
//       checkbox.checked = true;
//     } else {
//       checkbox.checked = false;
//     }
//   });
// };

// export { checkEvent, currentChecks };