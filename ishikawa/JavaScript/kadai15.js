//課題15

class Item {
    constructor(id, name, stock) {
        this.id = id;
        this.name = name;
        this.stock = stock;
    }
    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getStock(){
        return this.stock;
    }
    sale(num) {
        if (this.stock < num) {
            throw new Error('在庫が足りません')
        } else {
            this.stock -= num;
        }
    }
    add(num) {
        this.stock += num;
    }
}

class Chair extends Item {
    constructor(id,name,stock,isUsed){
        super(id,name,stock);
    this.isUsed = isUsed;
    }

    getIsUsed(){
        return this.isUsed;
    }

}

class Box extends Chair {
    constructor(id,name,stock,isUsed,largth){
        super(id,name,stock,isUsed);
    this.largth = largth
    }

    getBox(){
        return this.box;
    }
}

let item1 = new Item('0001', 'ソファベッド', 100,);
let item2 = new Item('0002', 'シングルベッド', 100);
let item3 = new Item('0003', '子ども用ベッド', 10);
let chair1 = new Chair('0004','木製チェア',30,true);
let box1 = new Box('0005','収納ボックス',45,false,25)


console.log(item1)
console.log(item2)
console.log(item3)
console.log(chair1)
console.log(box1)

item1.sale(21)
chair1.sale(5)
box1.sale(35)

item3.add(15)
box1.add(20)

console.log(item1.stock)
console.log(item2.stock)
console.log(item3.stock)
console.log(chair1.stock)
console.log(box1.stock)

