import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            // count : 0,
            count : {
                countt:0
            },
            arr : [
                1,2,3,4,5,6,7,8,9,0
            ]
        }
        this.state1 = {
            count : 1
        }
        //! 1.改变this指向的第一种方式
        this.add = this.add.bind(this)
        // this.arrAdd = this.arrAdd.bind(this)
    }
    arrAdd=(e)=>{
        let newArr = this.state.arr.splice(0,3)
        // this.setState({
        //     arr:newArr.concat([1000])
        // })
        this.setState((prevState,prevProps)=>({
            arr:[...newArr]
        }),()=>{

        })
        console.log(newArr)
    }
    add(e){
        console.log(e)
        //! 除了constructor之外的其他地方，修改状态唯一方法是调用 this.setState()
        //! setState是异步操作
        //* 1.setState对象:无法获取state中值的变化,开发中可能会出错
        // this.setState({
        //    count:{countt:this.state.count.countt+1}
        // })
        // console.log(this.state.count)           //! 不能获取到setState更新后的值
        
        //* 2.setState函数：可以用第二个参数，直接拿到异步更新后的值
        let tempState = Object.assign({}, this.state.count, {countt: 100 });
        this.setState((prevState,prevProps)=>({
            // count:tempState
            count:{countt:this.state.count.countt+1}
        }),()=>{
            //! 在一个回调函数，在状态改变之后就会执行
            console.log(this.state.count.countt)           //! 能获取到setState更新后的值
        })   
    }
    render() {
        console.log('渲染了')
        return (
            <div>
                {/* <h2>{this.state.count}</h2> */}
                <h2>{this.state.count.countt}</h2>
                <h3>{this.state.arr}</h3>
                <button onClick={this.add}>操作对象+1</button>
                <button onClick={this.arrAdd}>操作数组+1</button>
            </div>
        )
    }
}
