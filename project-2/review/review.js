
let reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: './images/person-1.avif',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        img: './images/person-2.avif',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        img: './images/person-3.avif',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        img: './images/person-4.jpg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];


let imageArea = document.getElementById('person-img')
let author = document.getElementById('author')
let job = document.getElementById('job')
let info = document.getElementById('info')
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')


let count = 0;
function loadData(param) {
    imageArea.src = reviews[param].img
    author.textContent = reviews[param].name
    job.textContent = reviews[param].job
    info.textContent = reviews[param].text
}

loadData(count)

nextBtn.addEventListener('click', () => {
    if (count < reviews.length - 1) {
        loadData(++count)
    }
})

prevBtn.addEventListener('click', () => {
    if (count > 0) {
        loadData(--count)
    }
})





