

const totalQuantity = document.querySelector('.quantity')
const cartContent = document.querySelector('.cart-content')
const noData = document.querySelector('.no-data')
let basket = JSON.parse(localStorage.getItem('data')) || [];

const loadProducts = () => {
    if (basket.length !== 0) {
        cartContent.innerHTML = basket.map((data) => {
            const { id, quantity } = data;
            let productOne = productData.find((d) => d.id === id) || []
            return `<div class="img-container">
                <img src=${productOne.img} height=140" width="160" alt="">
                <div class="price">
                <p class="title">
                    ${productOne.title}
                </p>
                    <div class="price-amt">
                                            ₹${productOne.amount}
                    </div>
                    <div class="quantity-details">

                        <svg onclick="increament(${id})" class="increase"  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>

                        <p id="${id}">${quantity}</p>

                        <svg onclick="decreament(${id})" class="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                    
                    </div>
                    <div class="separator"> </div>
                    <div class="total-amount"> ₹${quantity * productOne.amount} </div>

                        <div class="cross" onclick="removeItem(${id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
        </svg></div>
    </div>

        ` }).join("")
    } else {
        cartContent.innerHTML = '';
        noData.innerHTML = `
    <div class="btn"><a href="product.html">go to home<a/></div>`
    }
}

loadProducts()


const calculateCartItems = () => {
    const totalItems = basket.map(data => data.quantity).reduce((x, y) => x + y, 0)
    totalQuantity.innerHTML = totalItems;
}

calculateCartItems()



const increament = (id) => {
    const getOne = basket.find((d) => d.id === id)
    if (getOne === undefined) {
        basket.push({
            id: id,
            quantity: 1
        })

    } else {
        getOne.quantity += 1;
    }
    localStorage.setItem('data', JSON.stringify(basket))
    updateQuantity(id)
    loadProducts();
    calculateCartItems();
}

const decreament = (id) => {
    const getOne = basket.find((d) => d.id === id)
    if (getOne === undefined || getOne.quantity === 0) return;
    getOne.quantity -= 1;
    updateQuantity(id)
    basket = basket.filter((d) => d.quantity !== 0)
    localStorage.setItem('data', JSON.stringify(basket))
    loadProducts()
    calculateCartItems();
}

const updateQuantity = (id) => {
    const getOne = basket.find((d) => d.id === id)
    document.getElementById(id).innerHTML = getOne === undefined ? 0 : getOne.quantity;
}


const removeItem = (id) => {
    const removeOne = basket.map((d) => d.id === id)
    basket.splice(removeOne, 1);
    loadProducts();
    calculateCartItems()
    localStorage.setItem('data', JSON.stringify(basket))
}


