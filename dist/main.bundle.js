"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 100vh;\r\n}\r\n\r\n.sidebar{\r\n    background-color:rgb(161, 225, 255);\r\n    border: 1px black solid;\r\n}\r\n\r\n.main-container{\r\n    background-color:rgb(161, 225, 255);\r\n}\r\n\r\n.task{\r\n    background-color: azure;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 7fr 1fr auto;\r\n    align-items: center;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.task-date{\r\n    grid-column: 2/3;\r\n    grid-row: 1/3;\r\n}\r\n\r\n.task>button{\r\n    grid-row: 1/3;\r\n    grid-column: 3/4;\r\n    background:none;\r\n    border:none;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.project{\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,yBAAyB;AAC7B;;AAEA;IACI,mCAAmC;IACnC,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,2BAA2B;IAC3B,mCAAmC;IACnC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,eAAe;IACf,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB","sourcesContent":["*{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.app-container{\r\n    display:grid;\r\n    grid-template-columns: 1fr 5fr;\r\n    grid-template-rows: 100vh;\r\n}\r\n\r\n.sidebar{\r\n    background-color:rgb(161, 225, 255);\r\n    border: 1px black solid;\r\n}\r\n\r\n.main-container{\r\n    background-color:rgb(161, 225, 255);\r\n}\r\n\r\n.task{\r\n    background-color: azure;\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 7fr 1fr auto;\r\n    align-items: center;\r\n    padding: 5px 15px;\r\n}\r\n\r\n.task-date{\r\n    grid-column: 2/3;\r\n    grid-row: 1/3;\r\n}\r\n\r\n.task>button{\r\n    grid-row: 1/3;\r\n    grid-column: 3/4;\r\n    background:none;\r\n    border:none;\r\n    cursor: pointer;\r\n    width: fit-content;\r\n}\r\n\r\n.project{\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewButton": () => (/* binding */ createNewButton),
/* harmony export */   "createNewProjectButton": () => (/* binding */ createNewProjectButton)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");


let mainContainer = document.querySelector(".main-container")
let sidebar = document.querySelector(".sidebar")
let tasksContainer = document.querySelector(".tasks-container")
let projectsContainer = document.querySelector(".projects-container")

function addProjectForm() {
    let formContainer = document.createElement("div")
    let title = document.createElement("input")
    let acceptButton = document.createElement("button")
    let cancelButton = document.createElement("button")

    formContainer.classList.add("project-form")
    title.placeholder = "title"
    acceptButton.textContent = "create"
    cancelButton.textContent = "cancel"

    acceptButton.addEventListener("click", () => { addNewProjectAndCleanDom(title.value) })
    cancelButton.addEventListener("click", cancelProjectForm)

    projectsContainer.appendChild(formContainer)
    formContainer.appendChild(title)
    formContainer.appendChild(acceptButton)
    formContainer.appendChild(cancelButton)
}

function addProject(title) {
    let projectDiv = document.createElement("div")
    let projectTitle = document.createElement("div")
    let deleteButton = document.createElement("button")

    projectDiv.classList.add("project")
    projectDiv.setAttribute("data-title", title)
    projectTitle.textContent = title

    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", e => deleteProject(e))

    projectsContainer.appendChild(projectDiv)
    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(deleteButton)
}

function createNewProjectButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-project")
    addButton.textContent = "Add a new project"
    addButton.addEventListener("click", addNewProject)
    sidebar.appendChild(addButton)
}

function cancelProjectForm() {
    deleteProjectForm()
    createNewProjectButton()
}

function addNewProject() {
    deleteButton("btn-add-project")
    addProjectForm()
}

function deleteProjectForm() {
    let form = document.querySelector(".project-form")
    form.remove()
}

function addNewProjectAndCleanDom(title) {
    _pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("createNewProject",title)
    // addProject(title)
    // deleteProjectForm()
    createNewProjectButton()
}

function deleteProject(e) {
    let item = e.target.closest(".project");
    let title = item.dataset.title;
    console.log(title)
    _pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("deletedAProject", title)
    item.remove()
}

_pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectList", rederprojectList)
function rederprojectList(array) {
    projectsContainer.innerHTML = ""
    for (const element of array) {
        addProject(element.name)
    }
}

_pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("projectList",assignProjectObject)
function assignProjectObject(projectarray){
    let domProjects = document.querySelectorAll(".project")
    let domProjectsArray = Array.from(domProjects)
    
    for (let i = 0; i < projectarray.length; i++) {
        domProjectsArray[i].addEventListener("click",()=>{
            // alert(projectarray[i])
            console.log(projectarray[i])
            console.log(projectarray[i].taskList)
            console.log(projectarray[i].projects)
            rederTaskList(projectarray[i].taskList)
        }) ;
        
        
    }
   
}



function addNewTasks() {
    deleteButton("btn-add-todo")
    createTaskForm()
}

function createNewButton() {
    let addButton = document.createElement("button")
    addButton.classList.add("btn-add-todo")
    addButton.textContent = "+ add a new task"
    addButton.addEventListener("click", addNewTasks)
    mainContainer.appendChild(addButton)
}

function deleteButton(buttonClass) {
    let addButton = document.querySelector(`.${buttonClass}`)
    addButton.remove()
}

function createTaskForm() {
    let divContainer = document.createElement("div")
    let title = document.createElement("input")
    let description = document.createElement("input")
    let dueDate = document.createElement("input")
    let buttonCreateTask = document.createElement("button")
    let buttonCancel = document.createElement("button")

    divContainer.classList.add("new-task-form")

    title.placeholder = "Title"
    description.placeholder = "Description"
    dueDate.type = "date"

    buttonCreateTask.addEventListener("click", () => {
        createNewTask(title.value, description.value, dueDate.value)
    })
    buttonCreateTask.classList.add("create-task")
    buttonCreateTask.textContent = "Create New Task"
    buttonCancel.addEventListener("click", cancelTaskForm)
    buttonCancel.textContent = "Cancel"

    mainContainer.appendChild(divContainer)
    divContainer.appendChild(title)
    divContainer.appendChild(description)
    divContainer.appendChild(dueDate)
    divContainer.appendChild(buttonCreateTask)
    divContainer.appendChild(buttonCancel)
}

function deleteTaskForm() {
    let form = document.querySelector(".new-task-form")
    form.remove()
}

function cancelTaskForm() {
    deleteTaskForm()
    createNewButton()
}

function createNewTask(title, description, dueDate) {
    _pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("createNewTask", submitForm(title, description, dueDate))
    deleteTaskForm()
    createNewButton()
}

function submitForm(title, description, dueDate) {
    return { title, description, dueDate }
}

_pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("taskListAdd", rederTaskList)

function rederTaskList(array) {
    tasksContainer.innerHTML = ""
    for (const element of array) {
        appendNewTask(element.title, element.description, element.dueDate)
    }
}

function appendNewTask(tit, desc, date) {
    let divContainer = document.createElement("div")
    let title = document.createElement("div")
    let description = document.createElement("div")
    let dueDate = document.createElement("input")
    let deleteButton = document.createElement("button")

    divContainer.classList.add("task")
    divContainer.setAttribute("data-title", tit)
    title.textContent = tit
    title.classList.add("title")
    description.textContent = desc
    dueDate.setAttribute("type", "date")
    dueDate.value = date
    dueDate.classList.add("task-date")
    deleteButton.textContent = "X"

    deleteButton.addEventListener("click", (e) => {
        deleteTodoTask(e)
    })

    tasksContainer.appendChild(divContainer)
    divContainer.appendChild(title)
    divContainer.appendChild(description)
    divContainer.appendChild(dueDate)
    divContainer.appendChild(deleteButton)
}

function deleteTodoTask(e) {
    let item = e.target.closest(".task");
    let name = item.dataset.title;
    console.log(name)
    _pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("deletedATodoTask", name)
    item.remove()
}



// publicar info de cuando se elimina una task de cierto proyecto
// pubsub.publish("deletedATodoTaskInSomeProyect", {ProyectName,TaskName})
// pubsub.publish("deletedATodoTaskInSomeProyect", {proyectlist[lugar array],TaskName})

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");
/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectList */ "./src/projectList.js");







(0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.createNewButton)()
;(0,_domManipulation__WEBPACK_IMPORTED_MODULE_2__.createNewProjectButton)()

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");






class ProjectList{
    constructor(){
        this.projects = []
    }

    addProject(name){
        this.projects.push(new _projects__WEBPACK_IMPORTED_MODULE_1__["default"](name))
        _pubSub__WEBPACK_IMPORTED_MODULE_2__.pubsub.publish("projectList",this.projects)
        
        console.log(this.projects)
    }

    deleteProject(name){
        let index =this.projects.findIndex(e => e.name === name)
        this.projects.splice(index, 1)
        console.log(this.projects)
    }
   
}

let projectList = new ProjectList
// projectList.addProject("My Tasks")


_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubsub.subscribe("createNewProject",(title)=>{
    projectList.addProject(title)
    console.log(title)
    console.log(projectList)
})

_pubSub__WEBPACK_IMPORTED_MODULE_2__.pubsub.subscribe("deletedAProject", (title)=>{
    projectList.deleteProject(title)
    console.log(title)
    console.log(projectList)
})


let title = "Create"
let description = "asd"
let dueDate="312"

// console.log(projectList)
// console.log(projectList.projects)
// // projectList.projects[0].addNewTasks({title, description, dueDate})

// console.log(projectList.projects)
// // console.log(projectList.projects[0].taskList)
// console.log(projectList.projects.name)
// // console.log(projectList.projects[0])

// // console.log(projectList.projects[0].taskList)




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


class Project{
    constructor(name){
        this.name = name;
        this.taskList = []
        this.taskList.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("titulo1", "description1", "dueDate1"))
        this.taskList.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("titulo2", "description2", "dueDate2"))
       
    }

    addNewTasks({title, description, dueDate}){
        this.taskList.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate))
    }

    deleteTask(title){
        let index =this.tasksList.findIndex(e => e.title === title)
        this.tasksList.splice(index, 1)
    }
}



/***/ }),

/***/ "./src/pubSub.js":
/*!***********************!*\
  !*** ./src/pubSub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubsub": () => (/* binding */ pubsub)
/* harmony export */ });

const pubsub = {
    events: {},
    subscribe: function(evName, fn) {
      console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
      //add an event with a name as new or to existing list
      this.events[evName] = this.events[evName] || [];
      this.events[evName].push(fn);
    },
    unsubscribe: function(evName, fn) {
      console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
      //remove an event function by name
      if (this.events[evName]) {
        this.events[evName] = this.events[evName].filter(f => f !== fn);
      }
    },
    publish: function(evName, data) {
      console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
      //emit|publish|announce the event to anyone who is subscribed
      if (this.events[evName]) {
        this.events[evName].forEach(f => {
          f(data);
        });
      }
    }
  };

  

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _pubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubSub */ "./src/pubSub.js");



let tasksList = []

class Task {
    constructor(title, description, dueDate) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate
    }
    
}

_pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("deletedATodoTask",deleteTaskFromList)

function deleteTaskFromList(title){
    let index =tasksList.findIndex(e => e.title === title)
    tasksList.splice(index, 1)
    console.log(tasksList)
}

_pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.subscribe("createNewTask", addTaskToList)

function addTaskToList({ title, description, dueDate }) {
    tasksList.push(new Task(title, description, dueDate))
    console.log(tasksList)
    _pubSub__WEBPACK_IMPORTED_MODULE_0__.pubsub.publish("taskListAdd",tasksList)
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQWdCO0FBQ2hCO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0EsSUFBSSxtREFBYztBQUNsQjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3B1YlN1Yi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTYxLCAyMjUsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE2MSwgMjI1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRle1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz5idXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTYxLCAyMjUsIDI1NSk7XFxyXFxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250YWluZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE2MSwgMjI1LCAyNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3ZnIgMWZyIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kYXRle1xcclxcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcclxcbiAgICBncmlkLXJvdzogMS8zO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzaz5idXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAxLzM7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzLzQ7XFxyXFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YlN1YlwiXHJcblxyXG5sZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250YWluZXJcIilcclxubGV0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIilcclxubGV0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIilcclxubGV0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb250YWluZXJcIilcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RGb3JtKCkge1xyXG4gICAgbGV0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGxldCBhY2NlcHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBsZXQgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG5cclxuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZm9ybVwiKVxyXG4gICAgdGl0bGUucGxhY2Vob2xkZXIgPSBcInRpdGxlXCJcclxuICAgIGFjY2VwdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY3JlYXRlXCJcclxuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiY2FuY2VsXCJcclxuXHJcbiAgICBhY2NlcHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHsgYWRkTmV3UHJvamVjdEFuZENsZWFuRG9tKHRpdGxlLnZhbHVlKSB9KVxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxQcm9qZWN0Rm9ybSlcclxuXHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZXB0QnV0dG9uKVxyXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QodGl0bGUpIHtcclxuICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcblxyXG4gICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKVxyXG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHRpdGxlKVxyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuXHJcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIlxyXG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IGRlbGV0ZVByb2plY3QoZSkpXHJcblxyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdilcclxuICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKVxyXG4gICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RCdXR0b24oKSB7XHJcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidG4tYWRkLXByb2plY3RcIilcclxuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IHByb2plY3RcIlxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROZXdQcm9qZWN0KVxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCkge1xyXG4gICAgZGVsZXRlUHJvamVjdEZvcm0oKVxyXG4gICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3QoKSB7XHJcbiAgICBkZWxldGVCdXR0b24oXCJidG4tYWRkLXByb2plY3RcIilcclxuICAgIGFkZFByb2plY3RGb3JtKClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpXHJcbiAgICBmb3JtLnJlbW92ZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RBbmRDbGVhbkRvbSh0aXRsZSkge1xyXG4gICAgcHVic3ViLnB1Ymxpc2goXCJjcmVhdGVOZXdQcm9qZWN0XCIsdGl0bGUpXHJcbiAgICAvLyBhZGRQcm9qZWN0KHRpdGxlKVxyXG4gICAgLy8gZGVsZXRlUHJvamVjdEZvcm0oKVxyXG4gICAgY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoZSkge1xyXG4gICAgbGV0IGl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIik7XHJcbiAgICBsZXQgdGl0bGUgPSBpdGVtLmRhdGFzZXQudGl0bGU7XHJcbiAgICBjb25zb2xlLmxvZyh0aXRsZSlcclxuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZGVsZXRlZEFQcm9qZWN0XCIsIHRpdGxlKVxyXG4gICAgaXRlbS5yZW1vdmUoKVxyXG59XHJcblxyXG5wdWJzdWIuc3Vic2NyaWJlKFwicHJvamVjdExpc3RcIiwgcmVkZXJwcm9qZWN0TGlzdClcclxuZnVuY3Rpb24gcmVkZXJwcm9qZWN0TGlzdChhcnJheSkge1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxyXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGFycmF5KSB7XHJcbiAgICAgICAgYWRkUHJvamVjdChlbGVtZW50Lm5hbWUpXHJcbiAgICB9XHJcbn1cclxuXHJcbnB1YnN1Yi5zdWJzY3JpYmUoXCJwcm9qZWN0TGlzdFwiLGFzc2lnblByb2plY3RPYmplY3QpXHJcbmZ1bmN0aW9uIGFzc2lnblByb2plY3RPYmplY3QocHJvamVjdGFycmF5KXtcclxuICAgIGxldCBkb21Qcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKVxyXG4gICAgbGV0IGRvbVByb2plY3RzQXJyYXkgPSBBcnJheS5mcm9tKGRvbVByb2plY3RzKVxyXG4gICAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvbVByb2plY3RzQXJyYXlbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcclxuICAgICAgICAgICAgLy8gYWxlcnQocHJvamVjdGFycmF5W2ldKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0YXJyYXlbaV0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RhcnJheVtpXS50YXNrTGlzdClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdGFycmF5W2ldLnByb2plY3RzKVxyXG4gICAgICAgICAgICByZWRlclRhc2tMaXN0KHByb2plY3RhcnJheVtpXS50YXNrTGlzdClcclxuICAgICAgICB9KSA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld1Rhc2tzKCkge1xyXG4gICAgZGVsZXRlQnV0dG9uKFwiYnRuLWFkZC10b2RvXCIpXHJcbiAgICBjcmVhdGVUYXNrRm9ybSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5ld0J1dHRvbigpIHtcclxuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXHJcbiAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1hZGQtdG9kb1wiKVxyXG4gICAgYWRkQnV0dG9uLnRleHRDb250ZW50ID0gXCIrIGFkZCBhIG5ldyB0YXNrXCJcclxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkTmV3VGFza3MpXHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlQnV0dG9uKGJ1dHRvbkNsYXNzKSB7XHJcbiAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YnV0dG9uQ2xhc3N9YClcclxuICAgIGFkZEJ1dHRvbi5yZW1vdmUoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcclxuICAgIGxldCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgIGxldCBidXR0b25DcmVhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gICAgbGV0IGJ1dHRvbkNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHJcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy10YXNrLWZvcm1cIilcclxuXHJcbiAgICB0aXRsZS5wbGFjZWhvbGRlciA9IFwiVGl0bGVcIlxyXG4gICAgZGVzY3JpcHRpb24ucGxhY2Vob2xkZXIgPSBcIkRlc2NyaXB0aW9uXCJcclxuICAgIGR1ZURhdGUudHlwZSA9IFwiZGF0ZVwiXHJcblxyXG4gICAgYnV0dG9uQ3JlYXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGNyZWF0ZU5ld1Rhc2sodGl0bGUudmFsdWUsIGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlLnZhbHVlKVxyXG4gICAgfSlcclxuICAgIGJ1dHRvbkNyZWF0ZVRhc2suY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10YXNrXCIpXHJcbiAgICBidXR0b25DcmVhdGVUYXNrLnRleHRDb250ZW50ID0gXCJDcmVhdGUgTmV3IFRhc2tcIlxyXG4gICAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxUYXNrRm9ybSlcclxuICAgIGJ1dHRvbkNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCJcclxuXHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcilcclxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSlcclxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNyZWF0ZVRhc2spXHJcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ2FuY2VsKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrRm9ybSgpIHtcclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1mb3JtXCIpXHJcbiAgICBmb3JtLnJlbW92ZSgpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFRhc2tGb3JtKCkge1xyXG4gICAgZGVsZXRlVGFza0Zvcm0oKVxyXG4gICAgY3JlYXRlTmV3QnV0dG9uKClcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgIHB1YnN1Yi5wdWJsaXNoKFwiY3JlYXRlTmV3VGFza1wiLCBzdWJtaXRGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkpXHJcbiAgICBkZWxldGVUYXNrRm9ybSgpXHJcbiAgICBjcmVhdGVOZXdCdXR0b24oKVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkge1xyXG4gICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIH1cclxufVxyXG5cclxucHVic3ViLnN1YnNjcmliZShcInRhc2tMaXN0QWRkXCIsIHJlZGVyVGFza0xpc3QpXHJcblxyXG5mdW5jdGlvbiByZWRlclRhc2tMaXN0KGFycmF5KSB7XHJcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiXHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgYXJyYXkpIHtcclxuICAgICAgICBhcHBlbmROZXdUYXNrKGVsZW1lbnQudGl0bGUsIGVsZW1lbnQuZGVzY3JpcHRpb24sIGVsZW1lbnQuZHVlRGF0ZSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kTmV3VGFzayh0aXQsIGRlc2MsIGRhdGUpIHtcclxuICAgIGxldCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuXHJcbiAgICBkaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcclxuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRpdGxlXCIsIHRpdClcclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0XHJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIilcclxuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY1xyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKVxyXG4gICAgZHVlRGF0ZS52YWx1ZSA9IGRhdGVcclxuICAgIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRhc2stZGF0ZVwiKVxyXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCJcclxuXHJcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlVG9kb1Rhc2soZSlcclxuICAgIH0pXHJcblxyXG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKVxyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXHJcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvVGFzayhlKSB7XHJcbiAgICBsZXQgaXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza1wiKTtcclxuICAgIGxldCBuYW1lID0gaXRlbS5kYXRhc2V0LnRpdGxlO1xyXG4gICAgY29uc29sZS5sb2cobmFtZSlcclxuICAgIHB1YnN1Yi5wdWJsaXNoKFwiZGVsZXRlZEFUb2RvVGFza1wiLCBuYW1lKVxyXG4gICAgaXRlbS5yZW1vdmUoKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgY3JlYXRlTmV3QnV0dG9uLFxyXG4gICAgLy8gcmVkZXJUYXNrTGlzdCxcclxuICAgIGNyZWF0ZU5ld1Byb2plY3RCdXR0b25cclxufVxyXG5cclxuLy8gcHVibGljYXIgaW5mbyBkZSBjdWFuZG8gc2UgZWxpbWluYSB1bmEgdGFzayBkZSBjaWVydG8gcHJveWVjdG9cclxuLy8gcHVic3ViLnB1Ymxpc2goXCJkZWxldGVkQVRvZG9UYXNrSW5Tb21lUHJveWVjdFwiLCB7UHJveWVjdE5hbWUsVGFza05hbWV9KVxyXG4vLyBwdWJzdWIucHVibGlzaChcImRlbGV0ZWRBVG9kb1Rhc2tJblNvbWVQcm95ZWN0XCIsIHtwcm95ZWN0bGlzdFtsdWdhciBhcnJheV0sVGFza05hbWV9KSIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiXHJcbmltcG9ydCB7Y3JlYXRlTmV3QnV0dG9uLGNyZWF0ZU5ld1Byb2plY3RCdXR0b259IGZyb20gXCIuL2RvbU1hbmlwdWxhdGlvblwiXHJcbmltcG9ydCB7IHB1YnN1YiB9IGZyb20gXCIuL3B1YlN1YlwiXHJcbmltcG9ydCBQcm9qZWN0TGlzdCBmcm9tIFwiLi9wcm9qZWN0TGlzdFwiXHJcblxyXG5cclxuY3JlYXRlTmV3QnV0dG9uKClcclxuY3JlYXRlTmV3UHJvamVjdEJ1dHRvbigpIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RzXCJcclxuaW1wb3J0IHsgcHVic3ViIH0gZnJvbSBcIi4vcHViU3ViXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdExpc3R7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QobmFtZSl7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUpKVxyXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKFwicHJvamVjdExpc3RcIix0aGlzLnByb2plY3RzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvamVjdChuYW1lKXtcclxuICAgICAgICBsZXQgaW5kZXggPXRoaXMucHJvamVjdHMuZmluZEluZGV4KGUgPT4gZS5uYW1lID09PSBuYW1lKVxyXG4gICAgICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMpXHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5sZXQgcHJvamVjdExpc3QgPSBuZXcgUHJvamVjdExpc3RcclxuLy8gcHJvamVjdExpc3QuYWRkUHJvamVjdChcIk15IFRhc2tzXCIpXHJcblxyXG5cclxucHVic3ViLnN1YnNjcmliZShcImNyZWF0ZU5ld1Byb2plY3RcIiwodGl0bGUpPT57XHJcbiAgICBwcm9qZWN0TGlzdC5hZGRQcm9qZWN0KHRpdGxlKVxyXG4gICAgY29uc29sZS5sb2codGl0bGUpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdClcclxufSlcclxuXHJcbnB1YnN1Yi5zdWJzY3JpYmUoXCJkZWxldGVkQVByb2plY3RcIiwgKHRpdGxlKT0+e1xyXG4gICAgcHJvamVjdExpc3QuZGVsZXRlUHJvamVjdCh0aXRsZSlcclxuICAgIGNvbnNvbGUubG9nKHRpdGxlKVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpXHJcbn0pXHJcblxyXG5cclxubGV0IHRpdGxlID0gXCJDcmVhdGVcIlxyXG5sZXQgZGVzY3JpcHRpb24gPSBcImFzZFwiXHJcbmxldCBkdWVEYXRlPVwiMzEyXCJcclxuXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KVxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0cylcclxuLy8gLy8gcHJvamVjdExpc3QucHJvamVjdHNbMF0uYWRkTmV3VGFza3Moe3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZX0pXHJcblxyXG4vLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdC5wcm9qZWN0cylcclxuLy8gLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdHNbMF0udGFza0xpc3QpXHJcbi8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RzLm5hbWUpXHJcbi8vIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaXN0LnByb2plY3RzWzBdKVxyXG5cclxuLy8gLy8gY29uc29sZS5sb2cocHJvamVjdExpc3QucHJvamVjdHNbMF0udGFza0xpc3QpXHJcblxyXG5cclxuIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtdXHJcbiAgICAgICAgdGhpcy50YXNrTGlzdC5wdXNoKG5ldyBUYXNrKFwidGl0dWxvMVwiLCBcImRlc2NyaXB0aW9uMVwiLCBcImR1ZURhdGUxXCIpKVxyXG4gICAgICAgIHRoaXMudGFza0xpc3QucHVzaChuZXcgVGFzayhcInRpdHVsbzJcIiwgXCJkZXNjcmlwdGlvbjJcIiwgXCJkdWVEYXRlMlwiKSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld1Rhc2tzKHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGV9KXtcclxuICAgICAgICB0aGlzLnRhc2tMaXN0LnB1c2gobmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSlcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUYXNrKHRpdGxlKXtcclxuICAgICAgICBsZXQgaW5kZXggPXRoaXMudGFza3NMaXN0LmZpbmRJbmRleChlID0+IGUudGl0bGUgPT09IHRpdGxlKVxyXG4gICAgICAgIHRoaXMudGFza3NMaXN0LnNwbGljZShpbmRleCwgMSlcclxuICAgIH1cclxufVxyXG5cclxuIiwiXHJcbmV4cG9ydCBjb25zdCBwdWJzdWIgPSB7XHJcbiAgICBldmVudHM6IHt9LFxyXG4gICAgc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBzdWJzY3JpYmVkIHRvIGtub3cgYWJvdXQgJHtldk5hbWV9YCk7XHJcbiAgICAgIC8vYWRkIGFuIGV2ZW50IHdpdGggYSBuYW1lIGFzIG5ldyBvciB0byBleGlzdGluZyBsaXN0XHJcbiAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdIHx8IFtdO1xyXG4gICAgICB0aGlzLmV2ZW50c1tldk5hbWVdLnB1c2goZm4pO1xyXG4gICAgfSxcclxuICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbihldk5hbWUsIGZuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBQVUJTVUI6IHNvbWVvbmUganVzdCBVTnN1YnNjcmliZWQgZnJvbSAke2V2TmFtZX1gKTtcclxuICAgICAgLy9yZW1vdmUgYW4gZXZlbnQgZnVuY3Rpb24gYnkgbmFtZVxyXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0gPSB0aGlzLmV2ZW50c1tldk5hbWVdLmZpbHRlcihmID0+IGYgIT09IGZuKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uKGV2TmFtZSwgZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhgUFVCU1VCOiBNYWtpbmcgYW4gYnJvYWRjYXN0IGFib3V0ICR7ZXZOYW1lfSB3aXRoICR7ZGF0YX1gKTtcclxuICAgICAgLy9lbWl0fHB1Ymxpc2h8YW5ub3VuY2UgdGhlIGV2ZW50IHRvIGFueW9uZSB3aG8gaXMgc3Vic2NyaWJlZFxyXG4gICAgICBpZiAodGhpcy5ldmVudHNbZXZOYW1lXSkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2TmFtZV0uZm9yRWFjaChmID0+IHtcclxuICAgICAgICAgIGYoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAiLCJpbXBvcnQgeyBwdWJzdWIgfSBmcm9tIFwiLi9wdWJTdWJcIlxyXG5cclxuXHJcbmxldCB0YXNrc0xpc3QgPSBbXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGUsXHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5wdWJzdWIuc3Vic2NyaWJlKFwiZGVsZXRlZEFUb2RvVGFza1wiLGRlbGV0ZVRhc2tGcm9tTGlzdClcclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tTGlzdCh0aXRsZSl7XHJcbiAgICBsZXQgaW5kZXggPXRhc2tzTGlzdC5maW5kSW5kZXgoZSA9PiBlLnRpdGxlID09PSB0aXRsZSlcclxuICAgIHRhc2tzTGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QpXHJcbn1cclxuXHJcbnB1YnN1Yi5zdWJzY3JpYmUoXCJjcmVhdGVOZXdUYXNrXCIsIGFkZFRhc2tUb0xpc3QpXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrVG9MaXN0KHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIH0pIHtcclxuICAgIHRhc2tzTGlzdC5wdXNoKG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSkpXHJcbiAgICBjb25zb2xlLmxvZyh0YXNrc0xpc3QpXHJcbiAgICBwdWJzdWIucHVibGlzaChcInRhc2tMaXN0QWRkXCIsdGFza3NMaXN0KVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=