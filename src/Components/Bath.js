import React from 'react'

const Bath = (props) => {
  console.log(props.size)
  return(
    <div>
      <h1>
      {props.size} Bath
      </h1>
    </div>
    
  )
}

export default Bath