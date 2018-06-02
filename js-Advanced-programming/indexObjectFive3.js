//寄生式继承
function createAnother(orginal){
	var clone=Object.create(orginal);
	clone.sayHi=function(){
		console.log("hi");
	}
	return  clone;
}

var person={
	name:"minjie",
	age:22,
	friends:[]
}
var ps=createAnother(person);
ps.sayHi();
console.log(ps.name)