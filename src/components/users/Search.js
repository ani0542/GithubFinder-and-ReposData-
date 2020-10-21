


import React, { Component } from 'react'

export default class Search extends Component {
    state={
        text:''
    }
    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.text==='')
        {
            this.props.setAlert('please enter something','light')
        }
        else
        {
            this.props.searchUsers(this.state.text)
            this.setState({
                text:''
            })
        }
       
    }
    render() {
        return (
            <>
                <form className='form' onSubmit={this.handleSubmit}>
                        <input type='text' name='text' placeholder='search users...' value={this.state.text} onChange={this.handleChange}/>
                        <buton className='btn btn-dark btn-block'>Search</buton>
               </form><br/>
               {
                   this.props.clearUser &&  <button className='btn btn-light btn-block' onClick={this.props.handleClick}>Clear</button>
               }
               
            </>
        )
    }
}

