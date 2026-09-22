

function func1(callback){
    setTimeout(() => {
        console.log('hi from func-1');
        callback()
    }, 100);
 
}

function func2(){
 console.log('hi from func-2');
}


func1(func2)
