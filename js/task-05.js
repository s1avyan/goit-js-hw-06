const refs = {
  inputField: document.querySelector("#name-input"),
  outPutName: document.querySelector("#name-output"),
};

refs.inputField.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    refs.outPutName.textContent = event.currentTarget.value;
  } else {
    refs.outPutName.textContent = "Anonymous";
  }
}
