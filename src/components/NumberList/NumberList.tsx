import {
  useCallback,
  useMemo,
  useState,
  type ChangeEventHandler,
  type ReactElement,
} from "react";
import style from "./NumberList.module.scss";
import List from "../List/List";

function filterNumbers(numbers: number[], tab: string): number[] {
  console.log("Call filterNumbers");
  return numbers.filter((val) => {
    switch (tab) {
      case "odd":
        return val % 2;
      case "even":
        return !(val % 2);
      default:
        return true;
    }
  });
}

function getInitialNumbers(): number[] {
  return Array.from({ length: 200 }, (_, i) => i);
}

export default function NumberList(): ReactElement {
  // Стейт всех чисел
  const [numbers, setNumbers] = useState<number[]>(getInitialNumbers);

  //Стейт значения input'а
  const [value, setValue] = useState<number>(0);

  //Стейт активного фильтра
  const [tab, setTab] = useState<string>("default");

  //Функция фильтрации чисел вызывается на каждый рендер
  const visibleNumbers = useMemo(
    () => filterNumbers(numbers, tab),
    [numbers, tab],
  );

  // Функция удаления числа по его индексу в массиве
  const handleDelete = useCallback((index: number) => {
    setNumbers((prevState) => {
      const arr = [...prevState];
      arr.splice(index, 1);
      return arr;
    });
  }, [setNumbers]);

  // Функция обработчик ввода в input
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(Number(e.target.value));
  };

  // Функция добавления числа
  const onAdd = () => {
    setNumbers((prevState) => [...prevState, value]);
    setValue(0);
  };

  return (
    <div className={style.container}>
      <div style={{ marginBottom: 20 }}>
        <input
          type="number"
          value={value}
          onChange={onChange}
          style={{ marginBottom: 5 }}
        />
        <button style={{ width: "100%" }} onClick={onAdd}>
          Добавить число
        </button>
      </div>
      <button style={{ width: "100%" }} onClick={() => setTab("default")}>
        Все
      </button>
      <button style={{ width: "100%" }} onClick={() => setTab("even")}>
        Только четные
      </button>
      <button style={{ width: "100%" }} onClick={() => setTab("odd")}>
        Только нечетные
      </button>
      {/* Список ререндерится даже при написании в инпут */}
      <List data={visibleNumbers} handleDelete={handleDelete} />
    </div>
  );
}
