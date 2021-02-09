const getDataPromise = (num) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        typeof num === 'number' ? resolve(num*2) : reject('Please provide a number')
        },2000)
    })
}

const processData = async () => {
    const data = await getDataPromise(2)
    //throw new Error('something went wrong')
    return data
}

processData().then(
    (data) => {
        console.log('Data',data)
    }
).catch(
    (err) => {
        console.log(err)
    }
)