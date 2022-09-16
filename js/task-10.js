const refs = {
  divForWork: document.querySelector("#boxes"),
  divForRemove: document.querySelector("#boxes, div"),
  btnForAdd: document.querySelector("[data-create]"),
  btnForDel: document.querySelector("[data-destroy]"),
  inputField: document.querySelector("input"),
};

refs.btnForAdd.addEventListener("click", createBoxes);
refs.btnForDel.addEventListener("click", destroyBoxes);
function createBoxes() {
  deleteDiv();
  addDiv();
}
function destroyBoxes() {
  deleteDiv();
}

function addDiv() {
  const newDivs = createDivMassive();
  refs.divForWork.append(...newDivs);
}

function deleteDiv() {
  while (refs.divForWork.firstChild) {
    const firstChild = refs.divForWork.firstChild;
    refs.divForWork.firstChild.remove(firstChild);
  }
}

function createDivMassive() {
  const divForCreate = [];

  for (let i = 0; i < refs.inputField.value; i += 1) {
    const divCreate = document.createElement("div");
    divForCreate.push(divCreate);
    divCreate.style.width += 30 + i * 10 + "px";
    divCreate.style.height += 30 + i * 10 + "px";
    divCreate.style.backgroundColor = getRandomHexColor();
    console.log(divCreate.style.backgroundColor);
  }
  return divForCreate;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
