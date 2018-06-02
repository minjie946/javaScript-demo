//组合式继承(缺点会调用两次父类的构造函数)
function SuperType(name){
	this.name=name;
	this.friends=new Array();
}

SuperType.prototype.sayName=function(){
	console.log(this.name);
}

function SubType(name,age){
	SuperType.call(this,name);//two 调用
	this.age=age;
}

SubType.prototype=new SuperType();//one 调用
SubType.prototype.constructor=SubType;//对对象的构造函数进行一个指定

SubType.prototype.sayAge=function(){
	console.log(this.age);
}
var instance=new SubType("minjie",15);
instance.friends.push("ss");
console.log(instance);
instance.sayName();
instance.sayAge();

var instance=new SubType("lx",18);
console.log(instance);