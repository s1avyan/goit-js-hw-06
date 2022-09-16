const refs = {
  forSizeControl: document.querySelector("#font-size-control"),
  textForChange: document.querySelector("#text"),
};

refs.forSizeControl.addEventListener("input", hendlerChangeFonSize);

function hendlerChangeFonSize() {
  refs.textForChange.style.fontSize = `${refs.forSizeControl.value}px`;
}
