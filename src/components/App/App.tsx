import { useState, type ReactElement } from "react";
import style from "./App.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getTicker } from "../../slices/tickerSlice";
import { startTicker, stopTiker } from "../../actions/tikerActions";
import type { ApiDispath } from "../../store/store";

export default function App(): ReactElement {
  const [working, setWorking] = useState(false);

  const ticker = useSelector(getTicker);

  const dispatch = useDispatch<ApiDispath>();

  const onClick = () => {
    if (working) {
      setWorking(false);
      dispatch(stopTiker());
    } else {
      setWorking(true);
      dispatch(startTicker());
    }
  };

  return (
    <div className={style.container}>
      Счётчик: {ticker}
      <div className={style.buttonContainer}>
        <button onClick={onClick}>{!working ? "Старт" : "Стоп"}</button>
      </div>
    </div>
  );
}
