import React from "react";
import { useEventCallback } from "rxjs-hooks";
import { increment } from "../../logic/TaskProgressService";

const Increment: React.FC = () => {
  const [clickCallback, count] = useEventCallback(increment, 0);
  return (
    <div>
      <div>
        <p>{`incremental count: ${count}`}</p>
        <button onClick={clickCallback}>increment</button>
      </div>
    </div>
  );
};
export default Increment;
