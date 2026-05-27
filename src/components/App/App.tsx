import type { ReactElement } from "react";
import style from "./App.module.scss";
import { useTimer } from "../../hooks/UseTimer";

export default function App(): ReactElement {
  const time = useTimer();

  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
    timeStyle: "medium",
  };

  return (
    <div className={style.container}>
      {time?.toLocaleString("ru-RU", options)}
    </div>
  );
}
