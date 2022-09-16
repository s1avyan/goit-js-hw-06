const refs = {
  outPutextField: document.querySelector("#validation-input"),
};

refs.outPutextField.addEventListener("blur", onFieldOutputChangeBlur);

function onFieldOutputChangeBlur(value) {
  if (!value.currentTarget.value.length) {
    onFieldOutputEraseValidation();
  } else if (
    value.currentTarget.value.length == refs.outPutextField.dataset.length
  ) {
    onFieldOutputValid();
    console.log("совпало");
  } else {
    onFieldOutputErr();
    console.log("не совпало");
  }
}

function onFieldOutputErr() {
  refs.outPutextField.classList.remove("valid");
  refs.outPutextField.classList.add("invalid");
}

function onFieldOutputValid() {
  refs.outPutextField.classList.remove("invalid");
  refs.outPutextField.classList.add("valid");
}

function onFieldOutputEraseValidation() {
  refs.outPutextField.classList.remove("invalid");
  refs.outPutextField.classList.remove("valid");
}

// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.

// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.
