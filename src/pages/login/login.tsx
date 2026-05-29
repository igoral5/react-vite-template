import { useState } from 'react';

import { Button } from '@components/button/button';
import { Input } from '@components/input/input';
import { PasswordInput } from '@components/password-input/password-input';

import type { ChangeEvent, ReactElement } from 'react';

import styles from './login.module.css';

export function LoginPage(): ReactElement {
  const [form, setValue] = useState({ email: '', password: '' });

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
        <Input placeholder="Email" value={form.email} name="Логин" onChange={onChange} />
        <PasswordInput
          placeholder="Пароль"
          value={form.password}
          name="password"
          onChange={onChange}
        />
        <Button
          primary={true}
          onClick={() => {
            /* */
          }}
        >
          Войти
        </Button>
      </form>
    </div>
  );
}
