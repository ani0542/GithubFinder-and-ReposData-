



import React, { Component, Fragment } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar'
import './App.css'
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

export default class App extends Component {


  state={
    users:[],
    user:{},
    loading:false,
    alert:null,
    repos:[]
  }


  // async componentDidMount(){
  //   this.setState({loading:true})
  //   const res=await axios.get(`https://api.github.com/users?&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users:res.data,loading:false})
  // }

  //search github users




  searchUsers= async text=>{
    console.log(text)
    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // console.log(res)
    this.setState({users:res.data.items,loading:false})
  }

  //get single github users

  getUser= async username=>{

    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // console.log(res)
    this.setState({user:res.data,loading:false})


  }


  //get users repos


  getUserRepos= async username=>{

    this.setState({loading:true})
    const res=await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res)
    this.setState({repos:res.data,loading:false})


  }


  handleClick=()=>{
    this.setState({
      users:[],
      loading:false
    })
  }

  setAlert=(msg,type)=>{
    this.setState({
          alert:{
            msg:msg,
            type:type
          }
    }) 
    setTimeout(()=>{
      this.setState({
        alert:null
  }) 
    },5000)
  }
  render() {
    return (
      <>
    <BrowserRouter>
         <div className='App'>

         
                  <Navbar title='Github Finder' icon='fab fa-github'/>

                  <div className='container'>
                  <Switch>

                  
                  <Route exact path='/' render={props=>(
                    <Fragment>
                             
                    
                  
                      <Alert alert={this.state.alert}/>
                      <Search searchUsers={this.searchUsers} handleClick={this.handleClick} clearUser={this.state.users.length>0?true:false} setAlert={this.setAlert}/>
                      <Users loading={this.state.loading} users={this.state.users}/>
                
                  </Fragment>
                  )}/>

                  <Route exact path='/about'   component={About}/>

                  <Route exact path='/user/:login'   render={props=>(
                    
                    <Fragment>

                             <User  getUser={this.getUser}  {...props} user={this.state.user} loading={this.state.loading}  getUserRepos={this.getUserRepos} repos={this.state.repos}/>   
                    </Fragment>

                  )}/>
                  
                  </Switch>
                  </div>

          </div>
     </BrowserRouter>
      </>
    )
  }
}

