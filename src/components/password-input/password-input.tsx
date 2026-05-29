import { useState } from 'react';

import { Input } from '@components/input/input';

import eyeOff from '../../images/eye-off.svg';
import eye from '../../images/eye.svg';

import type { DetailedHTMLProps, InputHTMLAttributes, ReactElement } from 'react';

type IconProps = {
  onClick: () => void;
};

const EyeOff = (props: IconProps): ReactElement => (
  <img src={eyeOff} alt="eye-off" onClick={props.onClick} />
);
const Eye = (props: IconProps): ReactElement => (
  <img src={eye} alt="eye-off" onClick={props.onClick} />
);

type PasswordInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const PasswordInput = ({ ...props }: PasswordInputProps): ReactElement => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      icon={isVisible ? EyeOff : Eye}
      onIconClick={() => setVisible(!isVisible)}
    />
  );
};
