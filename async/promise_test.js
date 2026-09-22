

const data = [
    {name:'jack', work:'sde-2'},
    {name:'joy', work:'sde-1'}
]

 function getData(){
     let output = ''
    setTimeout(() => {
        data.map((d) => {
            output += `<li>${d.name}</li>`
        })
        document.body.innerHTML = output
    }, 1000);
 }

  function addData(newData, callback){
    return new Promise((resolve, reject) => {
       let err = false;
        setTimeout(() => {
            data.push(newData)
            if(!err){
                resolve()
            } else{
                reject('error!')
            }
        }, 2000);
    })
  }

//   addData({name:'manohar', work:'qa'}, getData)

//   addData({name:'manohar', work:'qa'}).then(getData).catch((err) => console.log(err))

async function display(){
    await addData({name:'pratap', work:'qa'})
    getData()
  }

  display()



