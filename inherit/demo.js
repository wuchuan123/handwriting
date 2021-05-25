function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};
function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}
Child.prototype = new Parent();
Child.prototype.constructor = Child;

//class 继承
class Parent {
  constructor(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
  }
  getName() {
    console.log(this.name);
  }
}

class Childe extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
