import React from "react";
import { useEventCallback } from "rxjs-hooks";
import { stack } from "../../logic/TaskProgressService";

const Stack: React.FC = () => {
  const [stackCallback, stacked] = useEventCallback(stack, 0);
  return (
    <div>
      <div>
        <p>{`stacked: ${stacked}`}</p>
        <button onClick={stackCallback}>stack</button>
      </div>
    </div>
  );
};
export default Stack;
