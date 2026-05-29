import { getTimeFromTimestamp } from '@services/utils';

import statusImage from '../../images/status.svg';

import type { MessageInfo } from '@/types';
import type { ReactElement } from 'react';

import styles from './message.module.css';

type MessageProps = {
  id: number;
  message: MessageInfo;
};

export const Message = ({ id, message }: MessageProps): ReactElement => {
  const isOwnMessage = id.toString() === message.senderId.toString();
  const messageClassname = isOwnMessage ? styles.ownMessage : styles.message;
  const containerClassname = isOwnMessage
    ? styles.ownMessageContainer
    : styles.messageContainer;
  const status = isOwnMessage ? <img src={statusImage} alt="status" /> : null;

  return (
    <div className={containerClassname}>
      <div className={messageClassname}>
        {message.text}
        <div className={styles.messageInfo}>
          <p>{getTimeFromTimestamp(message.timestamp)}</p>
          {status}
        </div>
      </div>
    </div>
  );
};
