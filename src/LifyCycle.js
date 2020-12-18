import React, { Component } from 'react'

class SubCount extends Component {
    componentWillReceiveProps(newProps){
        console.log(`子组件将要接收新属性`,newProps)
    }
    render() {
        return(
            <div>

            </div> 
        )
    }
}

export default class LifyCycle extends Component {
    static defaultProps = {
        //*  1.加载默认属性
        name:'小马',
        age:18
    }
    constructor(props){
        super(props)
        console.log(`1.初始化 加载默认状态`)
        this.state = {
            count : 0
        }
    }
    componentWillMount(){
        console.log(`2.父组件将要被挂载`)
    }
    componentDidMount(){
        //当前这个方法中发起ajax请求 类似vue的mounted
        console.log(`4.父组件挂载完成`)
    }
    shouldComponentUpdate(nextProps,nextState){
        //!!!!!! 性能优化点
        // *比如页面只显示偶数，这样的话在奇数的时候就不用更新页面
        console.log(`5.组件是否要更新`);
        if(nextState.count % 2 === 0){
            return true
        }else{
            return false
        }
    }
    componentWillUpdate(){
        console.log(`7.组件将要更新`)
    }
    componentDidUpdate(){
        console.log(`8.组件更新完成`)
    }
    componentWillUnmount(){
        console.log('组件卸载完成')
    }
    handleClick=()=>{
        this.setState((preveState,preveProps)=>({
            count:preveState.count+1
        }),()=>{
            
        })
    }
    render() {
        console.log(`3.父组件（render）了`)
        return (
            <div>
                <h3>{this.state.count}</h3>
                <button onClick={this.handleClick}>+1</button>
                <SubCount count={this.state.count}></SubCount>
            </div>
        )
    }
}
