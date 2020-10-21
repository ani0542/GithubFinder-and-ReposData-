


import React from 'react'
import RepoItem from './RepoItem'
function Repos({repos}) {
    return (
        <>
            {
                 repos.map((value)=>{
                    return(
                        <>
                               <RepoItem  value={value}/>
                        </>
                    )
                })
            }
        </>
    )
}

export default Repos

