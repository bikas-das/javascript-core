// 'use strict'


console.log(this);



function testThis(){
    console.log('inside function', this);
}
testThis()
window.testThis()
// testThis.call(obj)


const obj = {
    name: 'bikash',
    getDetails: () => {
        console.log('in obj : ', this.name);
    },
    getDetails_2: function() {
        console.log('in obj : ', this.name);
    }
}

obj.getDetails()
obj.getDetails_2()

const obj2 = {
    x: 10,
    getValue: function(){
        const data = () => {
            console.log('inner this: ', this);
            
        }

        data()
    },
    getValue2: () => {
        const data = () => {
            console.log('inner this with arrow => : ', this);
            
        }

        data()
    }
}


obj2.getValue()
obj2.getValue2()