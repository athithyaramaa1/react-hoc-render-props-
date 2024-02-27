import React from 'react'

const LikeImage2 = (props) => {
  return (
    <div>
      <button onClick={props.handleChange}>LikeImage2 {props.count}</button>
    </div>
  )
}

export default LikeImage2
