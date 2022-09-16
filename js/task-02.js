const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');

const ingridientsForInsert = ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.classList.add('item')
  listEl.textContent = `${ingredient}`
  return listEl;
})

ulEl.append(...ingridientsForInsert);