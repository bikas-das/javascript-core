
let person1 = {
   name: 'jack',
   address: 'newyork',
   lang: 'english',
   hobby:{
    sports: 'cricket'
   } 
}

let person2 = {...person1};

print()

person2.lang = 'hindi'
person2.hobby.sports = 'football'
print()


function print(){
    console.log('----------');
    console.log('person1: ', person1);
    console.log('person2 : ', person2);
}

