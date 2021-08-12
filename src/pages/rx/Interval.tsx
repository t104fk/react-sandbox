import React from "react";
import { interval } from "rxjs";
import { useObservable } from "rxjs-hooks";
import { map, withLatestFrom } from "rxjs/operators";

type Props = {
  className?: string;
};
const Interval: React.FC<Props> = () => {
  // TODO: 何回目か => 総経過時間を計算するため
  return (
    <section>
      <Timer sec={3} />
    </section>
  );
};

type TimerProps = {
  sec: number;
};
const Timer = ({ sec }: TimerProps) => {
  // interval per 3 sec
  const value = useObservable(
    (state$) =>
      interval(sec * 1000).pipe(
        withLatestFrom(state$),
        // _numは流れてくる数字、intervalの秒数? => というよりindex?
        // stateは前回分の値
        map(([_num, state]) => {
          return _num + state;
        })
      ),
    1,
    [sec]
  );

  return <div>{value}</div>;
};
export default Interval;
