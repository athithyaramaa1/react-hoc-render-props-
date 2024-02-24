import React, { useState } from 'react';
import WrappedComp from './WrappedCompo';

function LikeImage(props) {
  return (
    <div>
      <button onClick={props.handleSetState}> Like Image {props.state}</button>
    </div>
  );
}

export default WrappedComp(LikeImage);