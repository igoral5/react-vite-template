import pageNotFound from '../../images/404.svg';

import type { ReactElement } from 'react';

import styles from './not-found.module.css';
import { Link } from 'react-router-dom';

export const NotFoundPage = (): ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img alt="page not found" src={pageNotFound} />
        <br />
        <Link to="/list" className={styles.link}>Перейти в список чатов</Link>
      </div>
    </div>
  );
};
