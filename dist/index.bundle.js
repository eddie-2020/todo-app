/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addremove.js":
/*!**************************!*\
  !*** ./src/addremove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"editToDo\": () => (/* binding */ editToDo),\n/* harmony export */   \"clearAll\": () => (/* binding */ clearAll)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\r\n\r\n\r\nconst editToDo = () => {\r\n  const toDoList = document.getElementsByClassName('task');\r\n  for (let i = 0; i < toDoList.length; i += 1) {\r\n    const taskLabel = toDoList[i].children[0].children[1];\r\n    taskLabel.addEventListener('click', () => {\r\n      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.refreshStore)();\r\n    });\r\n  }\r\n};\r\n\r\nconst addToDo = () => {\r\n  const buttons = document.getElementsByClassName('delete');\r\n  for (let i = 0; i < buttons.length; i += 1) {\r\n    buttons[i].addEventListener('click', () => {\r\n      const index = `item-${i}`;\r\n      const inputItem = document.getElementsByName(index)[0];\r\n      inputItem.parentElement.parentElement.remove();\r\n      (0,_functions__WEBPACK_IMPORTED_MODULE_1__.refreshStore)();\r\n      window.location.reload();\r\n    });\r\n  }\r\n};\r\n\r\nconst appendToDo = (task) => {\r\n  const taskList = document.createElement('example');\r\n  taskList.innerHTML = `\r\n          <div class=\"task\">\r\n          <div class=\"checks\">\r\n            <input type=\"checkbox\" name=\"item-${task.index}\" readonly=\"true\">\r\n            <label for=\"item-${task.index}\" style=\"text-decoration: none;\" contenteditable=true>${task.description}</label>\r\n          </div>\r\n          <div class=\"buttons-end\">\r\n            <div class=\"material-icons-outlined\">more_vert</div>\r\n            <span class=\"material-icons-outlined delete\" id=\"item-${task.index}\">delete_outline</span>\r\n          </div>\r\n        </div>\r\n      `;\r\n};\r\n\r\nconst createToDo = (description) => {\r\n  const newTask = {\r\n    description,\r\n    completed: false,\r\n    index: 0,\r\n  };\r\n\r\n  const stateList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getFromLocalStorage)();\r\n  const todoLength = stateList.length;\r\n  if (stateList.length === 0) {\r\n    newTask.index = 0;\r\n  } else {\r\n    newTask.index = todoLength;\r\n  }\r\n\r\n  stateList.push(newTask);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.setToLocalStorage)(stateList);\r\n  appendToDo(newTask);\r\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.reloadToDo)();\r\n  editToDo();\r\n  addToDo();\r\n};\r\n\r\ndocument.querySelector('.input > input').addEventListener('keypress', (e) => {\r\n  if (e.key === 'Enter') {\r\n    createToDo(e.target.value);\r\n    console.log('object');\r\n    window.location.reload();\r\n    e.target.value = '';\r\n  }\r\n});\r\n\r\nconst clearAll = () => {\r\n  document.querySelector('.clear').addEventListener('click', () => {\r\n    const toDoList = document.getElementsByClassName('task');\r\n    [...toDoList].filter((toDoList) => toDoList.children[0].children[0].checked)\r\n      .forEach((item) => item.remove());\r\n    (0,_functions__WEBPACK_IMPORTED_MODULE_1__.refreshStore)();\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/addremove.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateTodoList\": () => (/* binding */ generateTodoList),\n/* harmony export */   \"sortIndex\": () => (/* binding */ sortIndex),\n/* harmony export */   \"refreshStore\": () => (/* binding */ refreshStore)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\r\n\r\nconst sortIndex = (list) => {\r\n  for (let i = 0; i < list.length; i += 1) {\r\n    list[i].index = i;\r\n  }\r\n  return list;\r\n};\r\n\r\nconst generateTodoList = () => {\r\n  const list = document.getElementsByClassName('task');\r\n  const toDoList = [];\r\n  for (let i = 0; i < list.length; i += 1) {\r\n    const description = list[i].children[0].children[1].innerText;\r\n    const completed = list[i].children[0].children[0].checked;\r\n    const index = list[i].children[0].children[0].name.split('-')[1];\r\n\r\n    toDoList.push({\r\n      description,\r\n      completed,\r\n      index,\r\n    });\r\n  }\r\n  return toDoList;\r\n};\r\n\r\nconst refreshStore = () => {\r\n  const todoList = generateTodoList();\r\n  const sortedList = sortIndex(todoList);\r\n\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_0__.setToLocalStorage)(sortedList);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList),\n/* harmony export */   \"populate\": () => (/* binding */ populate)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _addremove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addremove */ \"./src/addremove.js\");\n\r\n\r\n\r\n\r\nconst toDoList = [];\r\n\r\n// populate list\r\nconst populate = (toDoList, sort) => {\r\n  let sortedTodo = [];\r\n  if (sort) {\r\n    sortedTodo = toDoList.sort((a, b) => a.index - b.index);\r\n  } else {\r\n    sortedTodo = toDoList;\r\n  }\r\n\r\n  for (let i = 0; i < sortedTodo.length; i += 1) {\r\n    let style = '';\r\n    let checkbox = '';\r\n    if (sortedTodo[i].completed) {\r\n      style = 'text-decoration: line-through;';\r\n      checkbox = 'checked';\r\n    } else {\r\n      style = 'text-decoration: none;';\r\n      checkbox = '';\r\n    }\r\n    // create list item\r\n    const list = document.createElement('example');\r\n    list.innerHTML += `<div class=\"task\">\r\n          <div class=\"checks\">\r\n            <input type=\"checkbox\" name=\"item-${sortedTodo[i].index}\" ${checkbox}>\r\n            <label class = \"listItems\" for=\"item-${sortedTodo[i].index}\" style=\"${style}\" contenteditable=true>${sortedTodo[i].description}</label>\r\n          </div>\r\n          <div class=\"buttons-end\">\r\n            <div class=\"material-icons-outlined\">more_vert</div>\r\n            <span class=\"material-icons-outlined delete\" id=\"item-${sortedTodo[i].index}\">delete_outline</span>\r\n          </div>\r\n        </div>`;\r\n    document.querySelector('.list').appendChild(list);\r\n  }\r\n};\r\n\r\nwindow.addEventListener('load', () => {\r\n  const localStore = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)();\r\n  if (localStore == null) {\r\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.setToLocalStorage)(toDoList, true);\r\n    populate(toDoList);\r\n  } else {\r\n    const sortedTodo = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.sortIndex)(localStore);\r\n    populate(sortedTodo, false);\r\n  }\r\n  (0,_storage__WEBPACK_IMPORTED_MODULE_1__.reloadToDo)();\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_2__.addToDo)();\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_2__.editToDo)();\r\n  (0,_addremove__WEBPACK_IMPORTED_MODULE_2__.clearAll)();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setToLocalStorage\": () => (/* binding */ setToLocalStorage),\n/* harmony export */   \"getFromLocalStorage\": () => (/* binding */ getFromLocalStorage),\n/* harmony export */   \"reloadToDo\": () => (/* binding */ reloadToDo)\n/* harmony export */ });\nconst setToLocalStorage = (toDo) => {\r\n  localStorage.setItem('toDo', JSON.stringify(toDo));\r\n};\r\n\r\nconst getFromLocalStorage = () => {\r\n  const toDo = localStorage.getItem('toDo');\r\n  return JSON.parse(toDo);\r\n};\r\n\r\nconst markAsDone = (index, value) => {\r\n  const toDo = getFromLocalStorage();\r\n  toDo.forEach((item) => {\r\n    if (item.index === Number(index) || item.index === index.toString()) {\r\n      item.completed = value;\r\n    }\r\n  });\r\n  setToLocalStorage(toDo);\r\n};\r\n\r\nconst updateToDo = (task) => {\r\n  const checkbox = task.children[0].children[0];\r\n  const checkboxIndex = checkbox.getAttribute('name').split('-')[1];\r\n\r\n  if (checkbox.checked) {\r\n    markAsDone(checkboxIndex, true);\r\n    checkbox.nextElementSibling.style.textDecoration = 'line-through';\r\n  } else {\r\n    markAsDone(checkboxIndex, false);\r\n    checkbox.nextElementSibling.style.textDecoration = 'none';\r\n  }\r\n};\r\n\r\nconst reloadToDo = () => {\r\n  const toDoList = document.getElementsByClassName('task');\r\n  [...toDoList].forEach((toDoList) => {\r\n    toDoList.children[0].children[0].addEventListener('click', () => {\r\n      updateToDo(toDoList);\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-setup/./src/storage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;