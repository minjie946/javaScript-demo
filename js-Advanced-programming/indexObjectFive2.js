//原型式继承(直接复制基础对象原型作为模板，基础的属性会是独立的但是对于引用类型则不是)
//引用类型：共享的
function object(o){
	function F(){};
	F.prototype=o;
	return new F();
}

var person={
	name:"minjie",
	age:22,
	friends:[]
}
var ps=object(person);
ps.name="one";
ps.friends.push("one");

console.log(ps.name);
console.log(ps.friends)

var pss=object(person);
pss.name="two";
pss.friends.push("two");

console.log(pss.name);
console.log(pss.friends)