import { useEffect, useState } from 'react';

import { Avatar } from '@components/avatar/avatar';
import { ChatsList } from '@components/chats-list/chat-list';

import logoutImage from '../../images/logout.svg';
import { getChats } from '../../services/api';

import type { ChatInfo } from '@/types';
import type { /*ChangeEvent,*/ ReactElement } from 'react';

import styles from './list.module.css';
import { Outlet } from 'react-router-dom';

export const ListPage = (): ReactElement => {
  const [chats, setChats] = useState<ChatInfo[]>([]);

  useEffect(() => {
    void getChats().then(setChats);
  }, []);

  // const [searchValue, setSearchValue] = useState('');

  // const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   setSearchValue(e.target.value);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.searchbar}>
          <Avatar name={'A'} />
          <div className={styles.link}>
            <img alt="logout" src={logoutImage} />
          </div>
        </div>
        <ChatsList chats={chats} />
      </div>
      <Outlet />
    </div>
  );
};
