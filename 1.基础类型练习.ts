function say(str:string) {
  return 'Hello ' + str
}

let ts = 'typeScript'
// console.log(say(ts));

// 布尔值 注意：new Boolean(1) 
// 在 TypeScript 中，boolean 是 JavaScript 中的基本类型，而 Boolean 是 JavaScript 中的构造函数。
let isDone:Boolean = false
let isCheck:Boolean = new Boolean(1)

// 数值
let num: number = 6
let num2: number = 0xf00d
let num8: number = 0o744
let infinityNumber: number = Infinity

// 字符串
let myName: string ='shu'
// let name: string = 'shu'
let age: number = 25
let sentence:string = `my name is ${myName} ,

I'll be ${age + 1} years old next month
`

// 空值， JavaScript中没有空值的概念，typeScript中用于表示没有任何返回值的函数； 
// 声明一个 void的值没用，因为你只能将它赋值为 undefined 和 null
function alertName():void {
  alert(`my name is ${myName} lon`)
}

// null 和 undefined
let u: undefined = undefined
let n: null = null

let un: undefined = null
let nu:undefined = undefined
let number: number = undefined

// 任意值，类型推论，联合类型
// 注意，慎用any类型，过度使用any不如直接编写js

let something: any = 7
something = 'seven'
let isbol = false
// isbol = 7  error ts编译报错，ts自动推论 isbol是Boolean 而 7 是数字
let somebody: number | string = 1
somebody = 'my is str'
function getLen(somebody: string | number):number {
  return somebody.length
} // error length 方法不是 string和 number 共有的方法

function getString(somebody: string | number):string {
  return somebody.toString()
}


// 对象类型——接口
interface Person {
  name: string,
  age: number
}
let user: Person = {
  name: 'shu',
  age: 25
}
// 约定了一个接口 Person 定义了一个变量user 其中user对象中。多属性或少属性 ts 编译都会报错

// 可选属性 其中 myClss 为可选, 此时，任然不可添加多余属性或少定义属性
interface myClass {
  name: string,
  age: number,
  myClass?: string
}
let my: myClass = {
  name: 'shu',
  age: 25,
  myClass: '1ban'
}

// 任意属性 注意，定义了 任意属性，那么接口中所有属性都必须属于任意属性的子集
// interface anyAttributes {
//   name: string,
//   age: number, // error
//   [propName: string]: string
// }
interface anyAttributes {
  name: string,
  age: number,
  [propName: string]: string | number
}
//  只读
interface readOnly {
  readonly id: number,
  name: string,
}