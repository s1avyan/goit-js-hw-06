const refs = {
  decrimentBtnListen: document.querySelector('[data-action="decrement"]'),
  incrementBtnListen: document.querySelector('[data-action="increment"]'),
  updateValueClick: document.querySelector("#value"),
};

refs.decrimentBtnListen.addEventListener("click", handleDecrementClick);
refs.incrementBtnListen.addEventListener("click", handleIncrementClick);

let newValueUI = 0;

function handleDecrementClick() {
  newValueUI -= 1;
  handleUpdateValueUI();
}

function handleIncrementClick() {
  newValueUI += 1;
  handleUpdateValueUI();
}
function handleUpdateValueUI() {
  refs.updateValueClick.textContent = newValueUI;
}
