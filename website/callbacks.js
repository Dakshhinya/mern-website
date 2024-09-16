// function myFuncOne(data){
//     console.log(`hello: f2: ${data}`);
//     functTwo();
// }
// function functTwo(data){
//     console.log("hello: f2")
// }
// setTimeout(myFuncOne,3000,"hello")

// function success(){
//     console.log("Success")
// }
// function fail(){
//     console.log("Fail")
// }
// function error(){
//     console.log("Error")
// }
// function exec(data,callback){
//     if(data){
//         console.log(`balance:${data}`);
//     }
//     callback()
//     setTimeout(callback,3000);
// }
// function trigger(){
//     const data=5;
//     if(data>0){
//         exec(data,success)
//     }
//     else if(data<=0){
//         exec(data,fail)
//     }
//     else{
//         exec("error",error)
//     }
// }
// trigger()

async function API(){
    try{
        const response=await fetch('https://66e526db5cc7f9b6273c6abf.mockapi.io/register')
        const data=await response.json()
        // console.table(data)
         return data;
    }catch{
        console.error(error)
    }
}
// API()
// const apidata=API();
async function apidata(){
    const apidata=await API();
    console.log(apidata)
    const mock=[{
        "name": "Hello"
    }]
  //  const structdatamapx=await mock.map((data)=>{console.log(data)})
  const activeusers=apidata.filter(data=>data.isActive)
  console.log(activeusers)
     const structdata= await apidata.map((data)=>{console.log(data)})
    // console.log(structdata)
}
apidata()