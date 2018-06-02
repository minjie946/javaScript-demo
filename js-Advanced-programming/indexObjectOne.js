/*对对象的进行一个练习：对象属性，构造函数，原型*/
var person = {
    name: "mini"
}
console.log(person)
/*对对象person进行添加一个属性*/
Object.defineProperty(person, "age", {
    configurable: true, //是否可以删除属性，能否修改成访问器属性
    enumerable: true, //能否被for-in循环返回值
    writable: true, //是否能够进行修改
    value: 18 //值，设置值等
})
person.age = 19;
console.log(person);
/*对对象添加多个属性值*/
Object.defineProperties(person, {
    sex: {
        enumerable: true,
        value: "0"
    },
    adreess: {
        enumerable: true,
        value: "hangzhou"
    },
    year: {
        enumerable: true,
        get: function () {
            return this._year;
        },
        set: function (newvalue) {
            if (newvalue > 2014) {
                this._year = newvalue;
            }
        }
    }
})
person._year = 2015;
console.log(person);

/*原型模式练习*/
//原型的对象(通过构造函数的形式进行练习)
function Mj() {
    this.naid="sss"
};
//对象字面量来实现的对圆原型的一个属性定义，同时这个会破坏实例指向的原型的关系
Mj.prototype = {
    constructor: Mj,
    name: "ss",
    age: "sss",
    job: "ss",
    sayName: function () {
        console.log(this.name);
    }
}
var friend = new Mj();
console.log(friend instanceof Object);
console.log(friend instanceof Mj);
console.log(friend.constructor == Mj);
console.log(friend.constructor == Object)
console.log(friend.naid)
/**原型的动态性***/
console.log("-------------------------------------------------")
/* function Person(){
	
}
var friends=new Person();
Person.prototype.name="minj";
console.log(friends.name) */
function Person(name,age){
	this.name=name;
	this.age=age;
	this.friends=["mij","lx"];
}
Person.prototype={
	constructor:Person,
	sayName:function(){
		console.log(this.name)
	}
}

var per1=new Person("mj",15);
var per2=new Person("lx",15);
per1.friends.push("vam");
per1.sayName()
per2.sayName()
console.log(per1)
console.log(per2)
