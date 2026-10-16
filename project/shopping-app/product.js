
const container = document.querySelector('.container')

// let basket = []
let basket = JSON.parse(localStorage.getItem('data')) || [];

const loadProducts = () => {
    productData.map((data) => {
        const { id, title, img, descr, amount, quantity } = data;
        let basketData = basket.find((d) => d.id === id) || []
        container.innerHTML += `<div class="img-container">
                <img src=${img} height="200" width="190" alt="">
                <p class="title">
                    ${title}
                </p>
                <div class="descrs">${descr}
                </div>

                <div class="price">
                    <div class="price-amt">
                                           ₹${amount}
                    </div>
                    <div class="quantity-details">

                        <svg onclick="increament(${id})" class="increase"  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>

                        <p id="${id}">${basketData.quantity === undefined ? 0 : basketData.quantity}</p>

                        <svg onclick="decreament(${id})" class="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
                        </svg>
                    </div>
                </div>
            </div>
        `
    })

}

loadProducts()

const totalQuantity = document.querySelector('.quantity')

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
    calculateCartItems();
}

const decreament = (id) => {
    const getOne = basket.find((d) => d.id === id)
    if (getOne === undefined || getOne.quantity === 0) return;
    getOne.quantity -= 1;
    basket = basket.filter((d) => d.quantity !== 0)

    updateQuantity(id)
    localStorage.setItem('data', JSON.stringify(basket))
    calculateCartItems();
}

const updateQuantity = (id) => {
    const getOne = basket.find((d) => d.id === id)
    document.getElementById(id).innerHTML = getOne === undefined ? 0 : getOne.quantity;

}

const calculateCartItems = () => {
    const totalItems = basket.map(data => data.quantity).reduce((x, y) => x + y, 0)
    totalQuantity.innerHTML = totalItems;
}

calculateCartItems()


