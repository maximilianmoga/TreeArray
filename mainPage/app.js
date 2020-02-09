import { productData } from '../products.js';
// import { productArray } from './product-array.js';
const productsData = productData.slice();
function findById(items, id) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (item.id === id) {
            return item;
        }
    }
}
let totalVotes;
let productVoteDetails;
const inititalizeState = () => {
    totalVotes = 0;
    productVoteDetails = [];
};
inititalizeState();
const displayThreeProducts = () => {
    const product1 = getRandomProduct(productsData);
    let product2 = getRandomProduct(productsData);
    let product3 = getRandomProduct(productsData);
    while (product1.id === product2.id
        || product2.id === product3.id
        || product3.id === product1.id)
    {
        product2 = getRandomProduct(productsData);
        product3 = getRandomProduct(productsData);
    }
    const radio1 = document.getElementById('product1');
    const radio2 = document.getElementById('product2');
    const radio3 = document.getElementById('product3');
    const radio1span = document.getElementById('product1span');
    const radio2span = document.getElementById('product2span');
    const radio3span = document.getElementById('product3span');
    const prod1Image = document.getElementById('oneImage');
    const prod2Image = document.getElementById('twoImage');
    const prod3Image = document.getElementById('threeImage');
    radio1.value = product1.id;
    prod1Image.src = product1.image;
    radio2.value = product2.id;
    prod2Image.src = product2.image;
    radio3.value = product3.id;
    prod3Image.src = product3.image;
    radio1span.textContent = product1.name;
    radio2span.textContent = product2.name;
    radio3span.textContent = product3.name;
};
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    console.log(totalVotes);
    e.preventDefault();
    const formData = new FormData(form);
    const selectedProductId = formData.get('product');
    totalVotes++;
    const productInVotesArray = findById(productVoteDetails, selectedProductId);
    if (productInVotesArray) {
        productInVotesArray.votes++;
    } else {
        productVoteDetails.push({
            id: selectedProductId,
            votes: 1,
        });
    }
    document.querySelector('input[name="product"]:checked').checked = false;
    localStorage.setItem('__votes', JSON.stringify(productVoteDetails));
    if (totalVotes >= 25) {
        window.location = '../results/index.html';
    }
    displayThreeProducts();
});
// function reset() {
//     inititalizeState();
// }
function getRandomProduct(someProducts) {
    const randomIndex = Math.floor(Math.random() * someProducts.length);
    const randomProduct = productsData[randomIndex];
    return randomProduct;
}
displayThreeProducts();