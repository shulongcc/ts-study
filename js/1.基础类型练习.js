function say(str) {
    return 'Hello ' + str;
}
var ts = 'typeScript';
// console.log(say(ts));
// 布尔值 注意：new Boolean(1) 
// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
var isDone = false;
var isCheck = new Boolean(1);
// 数值
var num = 6;
var num2 = 0xf00d;
var num8 = 484;
var infinityNumber = Infinity;
// 字符串
var myName = 'shu';
// let name: string = 'shu'
var age = 25;
var sentence = "my name is " + myName + " ,\n\nI'll be " + (age + 1) + " years old next month\n";
// 空值， JavaScript中没有空值的概念，typeScript中用于表示没有任何返回值的函数； 
// 声明一个 void的值没用，因为你只能将它赋值为 undefined 和 null
function alertName() {
    alert("my name is " + myName + " lon");
}
// null 和 undefined
var u = undefined;
var n = null;
var un = null;
var nu = undefined;
var number = undefined;
// 任意值，类型推论，联合类型
// 注意，慎用any类型，过度使用any不如直接编写js
var something = 7;
something = 'seven';
var isbol = false;
// isbol = 7  error ts编译报错，ts自动推论 isbol是Boolean 而 7 是数字
var somebody = 1;
somebody = 'my is str';
function getLen(somebody) {
    return somebody.length;
} // error length 方法不是 string和 number 共有的方法
function getString(somebody) {
    return somebody.toString();
}
var user = {
    name: 'shu',
    age: 25
};
var my = {
    name: 'shu',
    age: 25,
    myClass: '1ban'
};
