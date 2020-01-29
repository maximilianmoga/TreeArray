function getRandomProduct(products) {
    const randomIndex = Math.floor(Math.random() * products.length)
    const randomProduct = products[randomIndex];

    return randomProduct
}

export default getRandomProduct

