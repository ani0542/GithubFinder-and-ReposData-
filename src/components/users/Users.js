

import React from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
function Users(props) {
    if(props.loading)
    {
        return <Spinner/>
    }
    else
    {

    
    return (
        <>
             <div style={userStyle}>
                   {
                       props.users.map((value)=>{
                           return(
                       
                           <UserItem  key={value.id}  value={value}/>
                           )
                       })
                   }
            </div>
        </>
    )
                }
}

const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}
export default Users

