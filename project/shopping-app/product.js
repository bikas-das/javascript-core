
let productData = [
    {
        id: 1,
        img: './images/shirt_1.jpg',
        title: 'Casual Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$40',
        quantity: 0
    },
    {
        id: 2,
        img: './images/shirt_2.jpg',
        title: 'T Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$20',
        quantity: 0
    },
    {
        id: 3,
        img: './images/shirt_3.jpg',
        title: 'Denim Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$60',
        quantity: 0
    },
    {
        id: 4,
        img: './images/shirt_3.jpg',
        title: 'Formal Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$12',
        quantity: 0
    },
    {
        id: 5,
        img: './images/shirt_4.jpg',
        title: 'Cool Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$88',
        quantity: '0'
    },
    {
        id: 6,
        img: './images/shirt_5.jpg',
        title: 'Casual Shirt',
        descr: 'Lorem ipsum dolor dicta. Voluptas, molestias.',
        amount: '$40',
        quantity: 0
    }
]

const container = document.querySelector('.container')
console.log(container);

let basket = []
const loadProducts = () => {

    productData.map((data) => {
        const { id, title, img, descr, amount, quantity } = data;

        container.innerHTML += `<div class="img-container">
                <img src=${img} height="200" width="190" alt="">
                <p class="title">
                    ${title}
                </p>
                <div class="descrs">${descr}
                </div>

                <div class="price">
                    <div class="price-amt">
                                            ${amount}
                    </div>
                    <div class="quantity-details">

                        <svg class="increase" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                            fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>

                        <p>${quantity}</p>

                        <svg class="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
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





