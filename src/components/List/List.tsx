import { memo, type ReactElement } from "react";
import style from "./List.module.scss";

interface ListProps {
  data: number[];
  handleDelete: (index: number) => void;
}

function List({ data, handleDelete }: ListProps): ReactElement {
  return (
    <div style={{ marginTop: 20 }} className={style.list}>
      {data.map((item: number, index: number) => (
        <div className={style.item} onClick={() => handleDelete(index)} key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}

export default memo(List);

