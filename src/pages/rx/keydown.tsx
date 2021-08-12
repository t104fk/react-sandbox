import React from "react";
import { useObservable } from "rxjs-hooks";
import { keydowns } from "../../logic/TaskProgressService";

const Keydown: React.FC = () => {
  const keydowned = useObservable<string[]>(keydowns, []);
  return (
    <div>
      <div>
        <p>{`keydowned: ${keydowned}`}</p>
      </div>
    </div>
  );
};
export default Keydown;
