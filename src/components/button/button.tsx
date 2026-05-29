import { clsx } from 'clsx';

import type { DetailedHTMLProps, ButtonHTMLAttributes, ReactElement } from 'react';

import styles from './button.module.css';

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ primary, secondary, ...props }: ButtonProps): ReactElement => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        primary && styles.primary,
        secondary && styles.secondary
      )}
    >
      {props.children}
    </button>
  );
};
