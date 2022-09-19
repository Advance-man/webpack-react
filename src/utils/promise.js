// 实现简单的promise
export class Promise{
  constructor(callback){
    this.status = "pending";
    this.value = "";
    this.reason = "";
    this.resoveCallBacks = [];
    this.rejectCallBacks = [];

    const resolve = (value) => {
      this.status = "fulfilled";
      this.value = value;
      this.resoveCallBacks.forEach(cb => {
        cb();
      });
    }

    const reject = (reason) => {
      this.status = "rejected";
      this.reason = reason;
      this.rejectCallBacks.forEach(cb => {
        cb();
      })
    }

    callback(resolve,reject)
  }

  then(successcallback,failedcallback){
    if(this.status == "fulfilled"){
      successcallback(this.value)
    }else if(this.status == "rejected"){
      failedcallback(this.reason)
    }else if(this.status == "pending"){
      this.resoveCallBacks.push(()=>{
        successcallback(this.value)
      })

      this.rejectCallBacks.push(()=>{
        failedcallback(this.reason)
      })
    }
  }
}


// test success
let pro = new Promise(function (resolve,reject) {
  setTimeout(() => {
    resolve(10)
  }, 2000);
})

pro.then((value)=>{
  console.log("resolve return value",value)  //resolve return value 10
},(reason)=>{
  console.log("reject return resason",reason)
})



// test fail
let pro1 = new Promise(function (resolve,reject) {
  setTimeout(() => {
    reject(220)
  }, 2000);
})

pro1.then((value)=>{
  console.log("resolve return value",value)
},(reason)=>{
  console.log("reject return resason",reason)  // reject return resason 220
})