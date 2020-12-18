import React, { Component } from 'react'

export default class FormSimple extends Component {
    constructor(params){
        super(params)
        this.state = {
            username:'',
            password:''
        }
    }

    handleUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handlePassWord=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    handleSubmit=(e)=>{
        if(this.state.username && this.state.password){
            alert(`用户名：${this.state.username} 密码：${this.state.password}`)
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label htmlFor="name">用户名</label>
                    <input type="text"
                     value={this.state.username} 
                     onChange={this.handleUserName} id='name'/>
                </p>
                <p>
                    <label htmlFor="pwd">密码</label>
                    <input type="text" 
                    value={this.state.password} 
                    onChange={this.handlePassWord} id='pwd'/>
                </p>
                <input type="submit" value="登录"/>
            </form>
        )
    }
}
