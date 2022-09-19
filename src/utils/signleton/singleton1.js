// 单例模式 Class实现
export class Signleton{
  static instance = null
  constructor(name){
    if(Signleton.instance){
      return Signleton.instance;
    }
    this.name = name;
    Signleton.instance = this;
  }
  
  getName(){
    console.log(this.name);
  return this.name;
  }
}

let per1 = new Signleton("lily");
let per2 = new Signleton('lucy');
per1.getName();  //lily
per2.getName();  //lily
console.log("per1 === per2",per1 === per2) //per1 === per2 true