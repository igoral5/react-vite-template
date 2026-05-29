import { useMemo } from 'react';

import { Input } from '@components/input/input';
import { Message } from '@components/message/message';
import { timeDifference } from '@services/utils';

import { chats } from '../../data/chats';
import closeImage from '../../images/close.svg';
import sendIcon from '../../images/send.svg';

import type { ReactElement } from 'react';

import styles from './chat.module.css';

export const ChatPage = (): ReactElement | null => {
  const selectedChat = chats[0];

  const lastSeenText = useMemo(
    () =>
      (selectedChat &&
        'Был(а) в сети ' + timeDifference(Date.now(), selectedChat.lastSeen * 1000)) ||
      null,
    [selectedChat]
  );

  if (!selectedChat) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.chatHeader}>
        <div className={styles.recipientInfo}>
          <p className={styles.recipient}>{selectedChat.recipientName}</p>
          <p className={styles.lastSeen}>{lastSeenText}</p>
        </div>
        <div>
          <img src={closeImage} alt="close" />
        </div>
      </div>
      <div className={styles.messagesWrapper}>
        {selectedChat.messages.map((m, index) => (
          <Message id={34} message={m} key={index} />
        ))}
      </div>
      <div className={styles.replyBar}>
        <Input placeholder="Сообщение" />
        <img src={sendIcon} alt="send" />
      </div>
    </div>
  );
};
