import React from "react";
import { useEventCallback } from "rxjs-hooks";
import { delay2s } from "../../logic/TaskProgressService";

const Map: React.FC = () => {
  const [mapCallback, mapped] = useEventCallback(delay2s, "nothing");
  return (
    <div>
      <div>
        <p>{`mapped: ${mapped}`}</p>
        <button onClick={mapCallback}>map</button>
      </div>
    </div>
  );
};
export default Map;
