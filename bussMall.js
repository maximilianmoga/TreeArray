import { productData } from './products.js';
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
        window.location = 'results.html';
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








// import {images} from './products.js';
// import getRandomProduct from './random.js';

// let totalVotes = 0;

// const imagesData = images.slice ()
// let totalImages;
// let productVoteDetails;


// const product = document.getElementById('product1')
// product.src = imagesData[1].image

// const product1 = document.getElementById('product2')
// product1.src = imagesData[2].image

// const product2 = document.getElementById('product3')
// product2.src = imagesData[5].image

// const button = document.getElementById('button')
// button.addEventListener('click', () => {
//     totalVotes++;
    
//     product.src = getRandomProduct(images).image
//     product1.src = getRandomProduct(images).image
//     product2.src = getRandomProduct(images).image
   
//     while (product.src === product2.src
//         || product2.src === product1.src
//         || product1.src === product.src
//         ) {
//             product1.src = getRandomProduct(images).image
//             product2.src = getRandomProduct(images).image
//         }

// });

// console.log(totalVotes);

// // display three randome products
// const productVotesDetails = [];
// //display three new products

// // keep track of votes for a given product
// const bussProducts = () => {

// }
// //keep track of how many times a user has voted, period (up to 25)

// // select one of the three products 

// //keeep track of how many times a product appers so we can 
// const displayThreeImages = () => {
//     const randomImages = Math,floor
// }
// //get 3 random products from our date

// // make sure the products are unique

// //rander these three items on the screen as a radio buttons with the same name and diffrent values 
// const onSubmit = () => {

// }
// //event lisiner 
// //add and event lisiner to each radio button to select of of the three products 
// // when they select a product update the tottal votes 
// //update the productvotedetails.
// // if there is coffe in the vote array  push soem coffe in the array
// };
// const radio1 = document.getElementById('bubblegum');
// const radio2 = document.getElementById('bag');
// const radio3 = document.getElementById('banana');

// radio1.value = product1
// //restset the hole app when finished 
