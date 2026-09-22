

function func1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('hi from func-1')
            console.log('inside func--1');

        }, 100);

    })
}

function func2() {
    console.log('hi from func-2');
}


func1().then((func2)).catch((data) => console.log(data)
)

