import { type ReactElement } from "react";
import style from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTicker } from "../../slices/tickerSlice";
import { startTicker, stopTiker } from "../../actions/tikerActions";
import type { ApiDispath } from "../../store/store";

export default function App(): ReactElement {
  const ticker = useSelector(getTicker);

  const dispatch = useDispatch<ApiDispath>();

  const onStart = () => {
    dispatch(startTicker());
  };

  const onStop = () => {
    dispatch(stopTiker());
  };

  return (
    <div className={style.container}>
      Счётчик: {ticker}
      <div className={style.buttonContainer}>
        <button onClick={onStart}>Старт</button>
        <button onClick={onStop}>Стоп</button>
      </div>
    </div>
  );
}
