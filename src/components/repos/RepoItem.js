import React from 'react'

function RepoItem(props) {
    return (
        <>
               <div className='card'>
                          <h3>
                                 <a href={props.value.html_url}>{props.value.name}</a>
                          </h3>
               </div> 
        </>
    )
}

export default RepoItem
