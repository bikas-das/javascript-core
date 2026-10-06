

const parent = document.querySelector('.parent');
const color = document.querySelectorAll('.color');

[...parent.children].map((child) => {

    child.addEventListener('click', (elem) => {
        const element = elem.target;
        document.body.style.background = `${element.id}`;
        if (document.body.style.background === 'black') {
            [...color].map((c) => {
                c.style.color = 'white';
            })

        } else {
            [...color].map((c) => {
                c.style.color = '';
            })

        }

    })

})
