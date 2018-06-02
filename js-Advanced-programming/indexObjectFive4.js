//寄生式组合继承
//

/*
 将父类的对象进行一个克隆复制给子类的对象
 参数：subType    -->子类构造函数对象
       superType  -->父类构造函数对象
*/
function createAnother(subType,superType){
	var prototype=Object.create(superType.prototype);//通过（ES5）Object类定义的创建的函数
	prototype.constructor=subType;//因为重构原型：原型constructor的属性不会再指向构造函数，所以重新指定
	subType.prototype=prototype;//将父类的原型副本赋值给子类原型
}

//--------------------------------------
function SuperType(name){
	this.name=name;
}

SuperType.prototype.sayName=function(){
	console.log(this.name);
}

function SubType(name,age){
	SuperType.call(this,name);//继承父类的实例属性（构造函数中的属性）
	this.age=age;
}
//调用函数
createAnother(SubType,SuperType);//继承公共方法属性等（原型中的方法）

SubType.prototype.sayAge=function(){
	console.log(this.age);
}

var ps1=new SubType("ps1",18);
ps1.sayName();
console.log(ps1)

var ps2=new SubType("ps2",20);
ps2.sayName();
console.log(ps2)


