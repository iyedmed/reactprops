import React from 'react'

    // import propTypes from 'prop-types'
function Profile(props) {

  return (

            <div>
                   <h1 style={{color:"red"}}>{props.fullName}</h1>
                    <p>{props.bio}</p>
                    <h3>{props.profession}</h3> 
                   {props.children} 
       <button onClick={()=>props.handleName("iyed")}>click here to show name</button>
    
            </div>
      
        ) 
    }
    // ComponentProfile.defaultProps={
    //     fullName:"This a default name",
    //     bio:"This a default bio",
    //     profession:"This is a default profession"
    // }
    // ComponentProfile.propTypes={
    //     fullName:propTypes.string.isRequired,
    //     bio:propTypes.string.isRequired,
    //     profession:propTypes.string.isRequired,
    //     handleName:propTypes.func
    
    // }


export default Profile