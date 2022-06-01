/*

1、class（ES6）
1.1 概念
是 ES6 提供的一个 类 的写法。

1.2 基本结构
  // ES5 类
  function User(name, age) { // 构造函数
    this.name = name;
    this.age = age;

    this.sayHi = function () {
      console.log('Hi');
    }
  }
  User.prototype.show = function () { // 原型方法
    console.log('show');
  }

  // 因为函数也是对象，所以可以直接给函数添加属性或者方法，那么我们把这些称为静态属性/方法
  User.v = '1.0.0';

  // 实例化
  const u1 = new User('jack', 19);
  console.log(u1.name);
  console.log('静态属性只能通过函数调用：', User.v);

  // ES6 类
  class User {
    constructor(name, age) { // 构造函数
      this.name = name;
      this.age = age;
      this.sayHi = function () {
        console.log('hi');
      }
    }
    show() { // 挂载在原型上的
      console.log('show')
    }

    static v = '1.0.0' // 静态属性
  }

  // 实例化
  const u1 = new User('jack', 19);
  console.log(u1.name);
  console.log(User.v);

1.3 constructor
  类的默认方法，通过 new 调用 class 的时候会自动调用该方法。

  每个类都会有该方法，如果你没有添加该方法则会自动创建。

1.4 static
  用于创建类的静态属性或者静态方法，该属性或者方法只能通过 类 调用。

1.5 继承
*/

// 父类
class User {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log('Hi')
  }
}

// 子类
class Student extends User {
  constructor(name, className) {
    super(name); // 必须在第一行调用 super，表示调用父类的 constructor
    this.className = className;
  }
}

const s = new Student('jack', '三年一班');
console.log(s.name);
s.sayHi();