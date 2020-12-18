import React, { Component } from 'react'

//受控组件： 受状态控制的组件，需要与状态进行相应的绑定

export default class ControInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            val : '',   //设置默认值
            data : []
        }
    }
    handleChange=(e)=>{
        console.log(e)
        let val = e.target.value
        this.setState({
            val
        })
    }
    hanleClick=()=>{
        if(this.state.val){
            let data = [...this.state.data,this.state.val]
            this.setState({
                data:data
            })  
            this.setState({
                val:''
            })
        }
    }
    render() {
        return (
            <div>
                <input type='text' value={this.state.val} onChange={this.handleChange}></input>
                <button onClick={this.hanleClick}>添加</button>
                <ul>
                    {
                        this.state.data && this.state.data.map((item,i)=>{
                            return(
                                <li key={i}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
