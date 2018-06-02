/*对于对象的一个继承的（原型链的关系）*/
function SuperType() {
    this.name = "super";
}
SuperType.prototype.superSayName = function () {
    console.log("super-function");
}

function SubType() {
    this.age = "sub";

}
SubType.prototype = new SuperType();

SubType.prototype.subSayName = function () {
    console.log("sub-function");
}

SubType.prototype.superSayName = function () {
    console.log("super-function-s");
}

var instance = new SubType();
instance.superSayName()
instance.subSayName();
console.log(Object.keys(SubType.prototype))
console.log(Object.keys(SuperType.prototype))
