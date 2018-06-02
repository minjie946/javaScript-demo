function Person(name,age){
	this.name=name;
	this.age=age;
	this.friends=["mij","lx"];
}

Person.prototype={
	baid:"prototype",
	sayName:function(){
		console.log(this.name)
	}
}
var per1=new Person("mj",15);
var per2=new Person("lx",15);

per1.friends.push("vam");
console.log(per1.baid)
console.log(per2.baid)
