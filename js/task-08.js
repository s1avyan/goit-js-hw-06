const refs = {
  form: document.querySelector(".login-form"),
};
console.log(refs.form);

refs.form.addEventListener("submit", onFormSubit);

function onFormSubit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  if (mail && password) {
    const formData = {
      mail,
      password,
    };
    refs.form.reset();
    console.log(formData);
  } else {
    alert("Все поля должны быть заполнены");
  }
}

// function onFormSubit2(event) {    условие для алерта не настроено НАСТРОИТЬ!!!!!!!!!!!
//   event.preventDefault();
//   const formData = new FormData(event.currentTarget);
//   formData.forEach((value, name) => {
//     const data = {
//       [name]: value,
//     };
//   });
//   console.log(formData.values);
//   refs.form.reset();
// }
