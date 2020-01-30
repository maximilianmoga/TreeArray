import {images} from './products.js';
import getRandomProduct from './random.js';

const imagesData = images.slice ()
let totalImages;
let productVoteDetails;


const product = document.getElementById('product1')
product.src = imagesData[1].image

const product1 = document.getElementById('product2')
product1.src = imagesData[2].image

const product2 = document.getElementById('product3')
product2.src = imagesData[5].image

const button = document.getElementById('button')
button.addEventListener('click', () => {
    
    product.src = getRandomProduct(images).image
    product1.src = getRandomProduct(images).image
    product2.src = getRandomProduct(images).image
   
    while (product.src === product2.src
        || product2.src === product1.src
        || product1.src === product.src
        ) {
            product1.src = getRandomProduct(images).image
            product2.src = getRandomProduct(images).image
        }

});

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
