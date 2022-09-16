const refs = {
  divForWork: document.querySelector("#boxes"),
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
  // refs.divForWork.querySelectorAll("*").forEach((div) => div.remove());
  // -------------------------------------------------------
  // while (refs.divForWork.firstChild) {
  //   refs.divForWork.removeChild(refs.divForWork.firstChild);
  // }
  // -------------------------------------------------------
  refs.divForWork.innerHTML = "";
}

function createDivMassive() {
  const divForCreate = [];

  for (let i = 0; i < refs.inputField.value; i += 1) {
    const divCreate = document.createElement("div");
    divForCreate.push(divCreate);
    divCreate.style.width += funcForWithAndHeigth(i);
    divCreate.style.height += funcForWithAndHeigth(i);
    divCreate.style.backgroundColor = getRandomHexColor();
    console.log(divCreate.style.backgroundColor);
  }
  return divForCreate;
}
function funcForWithAndHeigth(i) {
  let value = i * 10 + 30 + "px";
  return value;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
