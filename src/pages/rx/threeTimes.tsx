import React from "react";
import { interval } from "rxjs";
import { useObservable } from "rxjs-hooks";
import { map } from "rxjs/operators";

// start is null
const threeTimes = () => interval(3000).pipe(map((v) => v * 3));

const ThreeTimes: React.FC = () => {
  const threeTimed = useObservable(threeTimes);
  return (
    <div>
      <div>
        <p>{`3 times: ${threeTimed}`}</p>
      </div>
    </div>
  );
};
export default ThreeTimes;
