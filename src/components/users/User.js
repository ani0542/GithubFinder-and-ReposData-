import React, { Component } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
export default class User extends Component {

    componentDidMount=()=>{
          this.props.getUser(this.props.match.params.login)
          this.props.getUserRepos(this.props.match.params.login)
    }
    render() {

        const {

            avatar_url,
            name,
            company,
            login,
            location,
            bio,
            blog,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = this.props.user


        const {loading} = this.props


        // const {repos} = this.props

        if(loading)
        {
            return <Spinner/>
        }
        return (
            <>
                 <Link to ='/' className='btn btn-light'>
                          Back to search
                 </Link>

                 Hireable:

                 {
                     hireable ?  (
                         <i className='fas fa-check text-success'/>
                     ):
                     (
                        <i className='fas fa-times-circle text-danger'/>
                     )
                 }


                 <div className='card grid-2'>
                        <div className='all-center'>
                               <img
                               src={avatar_url}

                               style={{width:'150px'}}

                               className='round-img'
                               />

                                   <h1>{name}</h1>
                                   <p>Location:{location}</p>
                        </div>
                 </div>

                 <div>
                     {bio && <>
                     
                                   <h3>Bio:</h3>
                                    <p>{bio}</p>

                     </>}

                     <a href={html_url}
                     
                     className='btn btn-dark my-1'>

                     Visit Github Profile

                     </a>

                     <ul>
                         <li>
                         {
                             login && 


                             <>
                                   
                                   <strong>Username:</strong>{login}

                             </>
                         }
                         </li>


                         <li>
                         {
                             company && 


                             <>
                                   
                                   <strong>Company:</strong>{company}

                             </>
                         }
                         </li>



                         <li>
                         {
                             blog && 


                             <>
                                   
                                   <strong>Website:</strong>{blog}

                             </>
                         }
                         </li>

                     </ul>
                 </div>


                 <div className='card text-center'>
                         <div className='badge badge-primary'>
                             Followers:{followers}
                         </div>

                         <div className='badge badge-success'>
                             Following:{following}
                         </div>

                         <div className='badge badge-light'>
                            Public Repos:{public_repos}
                         </div>

                         <div className='badge badge-dark'>
                             public_gists:{public_gists}
                         </div>
                 </div>

                <Repos repos={this.props.repos}/>
            </>
        )
    }
}
