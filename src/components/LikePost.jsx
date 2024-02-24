import React, { useState } from 'react';
import WrappedComp from './WrappedCompo';

function LikePost(props) {
  return (
    <div>
      <button onClick={props.handleSetState}>Like Post {props.state}</button>
    </div>
  );
}

export default WrappedComp(LikePost);