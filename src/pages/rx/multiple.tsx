import React from "react";
import { timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

const BASE = 10 * 1000;
type Props = {
  className?: string;
};
const Multiple: React.FC<Props> = () => {
  // TODO: 何回目か => 総経過時間を計算するため
  const five = useObservable(() => timer(0, BASE), 0);
  const scene = useObservable(() => timer(3 * 1000, BASE), 0);
  return (
    <section>
      <pre>count down: {five}</pre>
      <pre>view: {scene}</pre>
    </section>
  );
};

export default Multiple;
