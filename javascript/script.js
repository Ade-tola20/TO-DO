// GET COUNT ID
let countEl = document.getElementById("count-el");

// GET HEADER AND TEXTAREA ID
let headerInput = document.getElementById("head");
let areaInput = document.getElementById("add");

// GET BUTTON ID
let addBtn = document.getElementById("btn")

// GETTING THE UL FROM THE HTML
let ulEl = document.getElementById("myUL");

// ASSIGN VARIABLES TO THE DATA USED
let datas = [];
let count = 0;

// CHECKING THE LOCAL STORAGE FOR PREVIOUS DATAS
if (localStorage.getItem("data")) {
  datas = JSON.parse(localStorage.getItem("data"));
  count = datas.length;
}

// UPDATING THE DATAS FROM THE LOCAL STORAGE IF THERE IS ANY
countEl.textContent = count;
datas.forEach((data) => {
  createElement(data);
});

// A FUNCTION THAT CREATES THE LI ELEMENT
function createElement(value) {
  // CREATE AN LI ELEMENT
  const todoList = document.createElement("li");
  todoList.classList.add("list-style");

  // CREATE SPAN FOR THE HEADER INPUT, ADD CLASS AND VALUE TO IT
  const headerSpan = document.createElement("span");
  headerSpan.classList.add("header-style");
  headerSpan.textContent = value.header;

  // CREATE SPAN FOR THE TEXT AREA INPUT, ADD CLASS AND VALUE TO IT
  const addSpan = document.createElement("span");
  addSpan.classList.add("input-style");
  addSpan.textContent = value.add;

  // INCLUDE THE SPANS ELEMENT TO THE LIST
  todoList.append(headerSpan, addSpan);

  // INCLUDE THE LIST ELEMENT TO UNORDERED LIST
  ulEl.append(todoList);
}

// ADDING A FUNCTION TO THE ADD BUTTON WHEN CLICKED
function save() {
  // GRAB INPUT VALUES
  const header = headerInput.value;
  const add = areaInput.value;

  // IF THERE ARE NO VALUE, DO NOTHING
  if (!header || !add) return;

  // SAVING BOTH VALUES AS AN OBJECT
  const value = {
    header: header,
    add: add,
  };

  // UPDATING THE DATA/VALUE TO THE UI WHILE UPDATING THE LOCAL VARIABLE
  createElement(value);
  datas.push(value);
  count += 1;
  countEl.textContent = count;

  // SAVING THE DATA TO LOCAL STORAGE
  localStorage.setItem("data", JSON.stringify(datas));

  // CLEARING THE INPUT ELEMENT
  headerInput.value = "";
  areaInput.value = "";
};