import {
  useLayoutEffect,
  useRef,
  type ReactElement,
  type SyntheticEvent,
} from "react";
import { useDispatch, useSelector } from "../../stores/store";
import {
  authSelector,
  login,
  sendErrorSelector,
  sendingSelector,
  setFormValue,
} from "../../slices/AuthSlice";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";
import { type TLoginData } from "../../types";
import { formValidators } from "../../validators/FormValidators";
import style from "./Login.module.scss";
import { Input } from "../Input/Input";

export default function Login(): ReactElement {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isSending = useSelector(sendingSelector);

  const sendingError = useSelector(sendErrorSelector);

  const dispath = useDispatch();

  useLayoutEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const { values, handleChange, errors, isValid } =
    useFormWithValidation<TLoginData>(
      authSelector,
      setFormValue,
      formValidators,
    );

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispath(login(values));
  };

  return (
    <form className={style.form} noValidate onSubmit={handleSubmit}>
      <h3 className={style.title}>Вход</h3>
      <Input
        inputRef={inputRef}
        type="email"
        name="email"
        id="email"
        className={style.input}
        placeholder="Email"
        value={values.email || ""}
        error={errors.email}
        onChange={handleChange}
        aria-invalid={!!errors.email}
      />
      <Input
        type="password"
        name="password"
        id="password"
        className={style.input}
        placeholder="Пароль"
        value={values.password || ""}
        error={errors.password}
        onChange={handleChange}
        aria-invalid={!!errors.password}
      />
      <button
        className={style.button}
        type="submit"
        disabled={isSending || !isValid}
      >
        {isSending ? "Вход..." : "Войти"}
      </button>
      {sendingError && (
        <span className={style.sendError}>{`Ошибка: ${sendingError}`}</span>
      )}
    </form>
  );
}
