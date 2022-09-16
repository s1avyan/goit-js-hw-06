const refs = {
  bodyColor: document.querySelector("body"),
  valueOfBackGroundColor: document.querySelector(".color"),
  btnForChangeBgColor: document.querySelector(".change-color"),
};

refs.btnForChangeBgColor.addEventListener("click", onChangeBgColor);

// function onChangeBgColor() {
//   let bgColor = getRandomHexColor();
//   refs.bodyColor.style.backgroundColor = bgColor;
//   refs.valueOfBackGroundColor.textContent = bgColor;
// }
function onChangeBgColor() {
  refs.bodyColor.style.backgroundColor = getRandomHexColor();
  refs.valueOfBackGroundColor.textContent =
    refs.bodyColor.style.backgroundColor;
  /* почему выводится переменная в rgb хотя из функци приходит hex */
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
