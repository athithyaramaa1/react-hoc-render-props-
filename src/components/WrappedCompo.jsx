import React, { useState } from 'react';

const WrappedComp = (OriginalComponent) => {
  return function NewComponent(props) {
    const [state, SetState] = useState(0);

    const handleSetState = () => {
      SetState((prev) => prev + 1);
    };

    return <OriginalComponent state={state} handleSetState={handleSetState} />;
  };
};

export default WrappedComp;
