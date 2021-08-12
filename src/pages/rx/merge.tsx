import React from "react";
import { merge, timer } from "rxjs";
import { useObservable } from "rxjs-hooks";

type Props = {
  className?: string;
};
const Merge: React.FC<Props> = () => {
  // TODO: 何回目か => 総経過時間を計算するため
  const value = useObservable(() => {
    return merge(timer(0, 333), timer(0, 1000));
  }, 0);
  return <section>{value}</section>;
};

export default Merge;
