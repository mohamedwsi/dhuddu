/* const growMoney =()=>{
    return "GrowMoney"
};
const giveMoney =()=>{
    return "GiveMoney"
};
const earnMoney =()=>{
    return "earnMoney"
};

export default growMoney;
export {giveMoney,earnMoney}; */

export default class myName{
    constructor(name){
        this.name = name;
    }
    tellmeurname() {
        return `my name is ${this.name}`;
    }
}