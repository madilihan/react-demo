//! es7 react/redux 插件 rcc可以直接生成
// import React, { Component } from 'react'
// export default class App extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

import React,{Component} from "react";
import './App.css'
import Logo from './logo.svg'

//* 2，类声明 ES6 | 真实项目中应用最多            ------------------可以定义生命周期                         
//* 注意： A. React.Component 他是一个基类，使用类声明的组件，必须继承这个基类
//*       B. 在类中，必须有render函数
//*       C. 在render函数，需要return一个jsx元素
//*       D. 组件名称要以大写字母开头

//! 什么是复用组件
/*
    1.将多个组件进行整合，例如调用2次以上的相同组件
    2.结构非常复杂时 需要将组件拆分成小组件
    3.会存在父子关系的数据传递
*/
//! 按鈕
class MyBtn extends Component{
    render(){
        return(
            <button>{this.props.name}</button>  
        )
    }
}
//! AvatarUrl
class Avatar extends Component{
    render(){
        return(
            <img src={this.props.avatarUrl_defined} alt='' /> 
        )
    }
}
//! UserInfo
class UserInfo extends Component{
    render(){
        return(
            <div className='userInfo'>
                <Avatar avatarUrl_defined={this.props.avatarUrl}></Avatar>
                <div className='userName'>
                    {this.props.name}
                </div>
            </div> 
        )
    }
}
//! 页面内容
class Comment extends Component{
    handleClick=()=>{
        //* 点击事件 ----- 由于父级传递规定了add属性 所以this.props.add可以拿到父级的函数方法去触发
        this.props.add('这是子组件传给父组件的值')
    }
    render(){
        return(
            <div className='comment'>
                {/*用户信息*/}
                {/* <UserInfo avatarUrl={this.props.user.avatarUrl} name={this.props.user.name}></UserInfo> */}
                {/* 多个属性值可以用解构的方式赋值 */}
                <UserInfo {...this.props.user}></UserInfo>
                {/*用户内容*/}
                <div className="comment-content">
                    {this.props.user.content}
                </div>
                {/*用户日期*/}
                <div className="comment-date">
                    {this.props.user.date}
                </div>
                <button onClick={this.handleClick}>子传父</button>
            </div>
        )
    }
}



//! App->Comment->userInfo->Avatar
//! 遵循单向数据流 App=>A=>B  props在子组件中不容许修改
export default class App extends Component{
    //可写、可不写。写了得配套写全
    constructor(props){
        super(props)
        this.userData = {
            avatarUrl:Logo,
            name:'小马哥',
            content:'这是我的react组件',
            date:new Date().toLocaleTimeString()
        }
    }
    // 生命周期

    add(childrenVal){
        console.log(childrenVal)
    }
    //必须使用render函数， 将虚拟DOM渲染成真实DOM
    render(){
        //它会将jsx所接受的属性转换为单个对象传递到组件，这个对象我们称之为props
        return (
            <div>
                <h2>App,{this.props.name}</h2>
                <MyBtn name='提交1'></MyBtn>
                <MyBtn name='提交2'></MyBtn>
                <MyBtn name='提交3'></MyBtn>
                {/* user是子组件props之后找祖先数据的标识 */}
                <Comment user={this.userData} add={this.add}></Comment> 
            </div>
        )
    }
}




