function SuperType(){
  this.colors=["red","green"];
  this.name="minj";
}
SuperType.prototype.superSayName = function () {
    console.log("super-function");
}

function SubType(){
	SuperType.apply(this,arguments);//只是继承了属性
}
SubType.prototype=new SuperType();//继承方法，方法存在于原型中
SubType.prototype.subSayName = function () {
    console.log("sub-function");
}

var instance=new SubType();
instance.superSayName();
instance.colors.push("dd");
console.log(instance)
var instance1=new SubType();
console.log(instance1);
console.log("-------------------------------")
var Per={
	name:"mm",
	friends:["cc","dod"]
}
var nper1=Object.create(Per);
var nper2=Object.create(Per);

nper1.friends.push("re");
nper1.name="mj";
console.log(nper1.name)
console.log(nper2.name)





