const setEventToLocalStorage = (eventToDo) => {
  localStorage.setItem('eventToDo', JSON.stringify(eventToDo));
};
const getEventFromLocalStorage = () => {
  const eventToDo = localStorage.getItem('eventToDo');
  return JSON.parse(eventToDo);
};
export { setEventToLocalStorage, getEventFromLocalStorage };