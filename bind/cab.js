

const person1 = {
    name: 'bikash',
    city: 'surat',
}

const person2 = {
    name: 'david',
    city: 'ca',
}

function display(param1){
    // console.log(this);
    console.log(`${this.name} interested in ${param1}`);

}


//call
   display.call(person1, 'math')
   display.call(person2, 'coding')


   function display_2(...param){
    console.log(`${this.name} and interested in ${param}`);
}

//apply
   display_2.apply(person1, ['math','coding', 'sports'])

   
   function display_3(...param){
    console.log('in apply');
    
    console.log(`${this.name} and interested in ${param}`);
}



//bind
const res = display_3.bind(person1, 'math','coding', 'sports')
res()


