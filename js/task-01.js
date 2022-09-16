
const numOfCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${numOfCategories.length}`); 

numOfCategories.forEach(num => {
    const textOfHeaders = num.querySelector('h2');
    const arrayForLiLength = num.querySelectorAll('li')
    console.log(``) 
    console.log(`Category: ${textOfHeaders.textContent}`)
    console.log(`Elements: ${arrayForLiLength.length}`) 
})