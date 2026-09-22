

function func1() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve('hi from func-1')
            // console.log('inside func--2');

        }, 100);

    })
}

function func2() {
    console.log('hi from func-2');
}


async function getstuffdone() {
    const data = await func1()
    console.log(data);

    func2()
}

getstuffdone()

