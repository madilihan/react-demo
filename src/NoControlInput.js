import React, { Component } from 'react'

//不受状态控制
export default class NoControlInput extends Component {
    constructor(params){
        super(params)
        this.state={
            val:''
        }
    }
    handleChange=()=>{
        let val = this.refs.a.value
        this.setState({
            val
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} ref='a'/>
                <h2>{this.state.val}</h2> 
            </div>
        )
    }
}
