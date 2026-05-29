import type {
  ComponentType,
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactElement,
} from 'react';

import styles from './input.module.css';

type IconProps = {
  onClick: () => void;
  className: string;
};

type InputProps = {
  icon?: ComponentType<IconProps>;
  onIconClick?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input = ({
  icon: Icon,
  onIconClick,
  value,
  placeholder,
  onChange,
  type,
  ...props
}: InputProps): ReactElement => {
  const icon =
    Icon && onIconClick ? (
      <Icon onClick={onIconClick} className={styles.inputContainer} />
    ) : null;
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
      {icon}
    </div>
  );
};
