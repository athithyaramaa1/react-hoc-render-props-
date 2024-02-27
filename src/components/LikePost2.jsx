import React from 'react'

const LikePost2 = (props) => {
  return (
    <div>
      <button onClick={props.handleChange}>LikePost2 {props.count}</button>
    </div>
  )
}

export default LikePost2
