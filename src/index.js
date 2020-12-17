//* 项目的入口文件
import React from 'react'
import ReactDom, { render } from 'react-dom'
import App from './App'
import LifyCycle from './LifyCycle'
//* JSX - 到底是啥
//* JSX = Javascript + Xml 对象 虚拟DOM元素
//* {} == {{}}
const user = {
    fristName:'张',
    lastName:'三'
}
function formateName(user) {
    return user.fristName + user.lastName
}
function getGeeting(user) {
    if(user){
        return <h1>hello,{formateName(user)}</h1>
    }
    return <h1>hello,react</h1>
}

const ele = <h2>hello {formateName(user)}</h2>
console.log(ele)
// // ReactDom.render(<div>{getGeeting(user)}</div>,document.querySelector('#root'))

//! React只更新 他需要更新的部分
// function tick() {
//     const element = (
//         <div>
//             <h3>hello world</h3>
//             <h2>{new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
// //    ReactDom.render(element,document.querySelector('#root'))
// }
// setInterval(tick,1000)

//* 循环绑定元素 使用map
const arr = [1,2,3,4]
const ulEle = (<ul>
    {arr.map((item,index)=>{
        //循环绑定的jsx元素，必须使用key属性，来区分不同元素 ，否则会报错
        return (index>1 ? <li key={index}>{item}</li> : null)
    })}
</ul>);
// // ReactDom.render(ulEle,document.querySelector('#root'))

//* react核心思想就是组件化开发 其实就是玩JavaScript  就是函数

//* 1.函数式声明 - 函数式组件，本身就是一个函数                  ----------------------单纯的显示数据
//*              A .组件名称首字母一定大写！！！ 否则报错
//*              B .组件返回一个jsx对象
//*              C .props&组件
function Welcome(props) {
    return <h2>hello,{props.name}</h2>
}





// // ReactDom.render(<Welcome name='Welcome' />,document.querySelector('#root'))
// //ReactDom.render(<App name='你好' />,document.querySelector('#root'))
ReactDom.render(<LifyCycle />,document.querySelector('#root'))












