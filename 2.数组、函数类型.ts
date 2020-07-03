// 数组的类型

// 简单类型
let arr :number[] = [1,1,2,3]
// 数组中不允许出现其它类型
// let arr :number[] = [1,1,2,3,'4'] 报错

// 数组泛型
let arr1: Array<number> = [1,2,3,4,5]

// 用接口表示数组 
// tips 对于描述数组过于复杂，常用户表示类数组
interface NumberArray {
  [index: number] :number
}
let arr2: NumberArray = [1,1,2,3,5]

// 类数组


// any在数组中的应用
let anyArr: any[] = ['str', 1, {obj: '这是一个对象啊'}]