import type { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type RootState } from "../stores/store";
import type { TFieldType } from "../types";
import React, { type ChangeEvent } from "react";
import type { TFormValidators } from "../validators/FormValidators";

type TErrorState<T> = { [key in keyof T]: string };

type TUseFormWithValidation<T> = {
  values: T;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  errors: TErrorState<T>;
  isValid: boolean;
};

/**
 * Хук для валидации формы
 * @param selector Селектор REDUX для получения объекта со значениями полей ввода формы
 * @param setFormValue Action REDUX для установки значений полей ввода формы
 * @param validators Объект с функциями валидации для каждого поля формы
 * @returns Значения полей формы, функцию для вызова при изменении полей формы, ошибки ввода, признак валидности
 */
export function useFormWithValidation<T>(
  selector: (state: RootState) => T,
  setFormValue: ActionCreatorWithPayload<TFieldType<T>>,
  validators: TFormValidators<T>,
): TUseFormWithValidation<T> {
  const values = useSelector(selector);

  const [errors, setErrors] = React.useState<TErrorState<T>>(
    initError<T>(values),
  );

  const [isValid, setIsValid] = React.useState(false);

  const dispatch = useDispatch();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;

    const value = input.value;

    const name = input.name as keyof T;

    const isValid = validators[name]?.validator(value) ?? true;

    dispatch(setFormValue({ field: name, value }));

    setErrors({
      ...errors,
      [name]: !isValid ? validators[name]!.message : undefined,
    });

    setIsValid(isValid);
  };

  return { values, handleChange, errors, isValid };
}

function initError<T>(a: T): TErrorState<T> {
  return Object.keys(a as object).reduce((acc, k) => {
    acc[k as keyof T] = "";
    return acc;
  }, {} as TErrorState<T>);
}
