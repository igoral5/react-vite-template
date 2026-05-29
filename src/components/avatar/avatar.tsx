import type { ReactElement } from 'react';

import styles from './avatar.module.css';

type AvatarProps = {
  name: string;
};

export const Avatar = ({ name }: AvatarProps): ReactElement => {
  return (
    <div className={styles.avatar}>
      <div className={styles.initials}>{name[0]}</div>
    </div>
  );
};
