import { normalizeData } from "@/services/api";
import React from "react";

import { Avatar } from "@components/avatar/avatar";
import { getTimeFromTimestamp } from "@services/utils";

import type { ChatInfo } from "@/types";
import type { ReactElement } from "react";

import styles from "./chats-list.module.css";
import { NavLink } from "react-router-dom";

type ChatsListProps = {
  chats: ChatInfo[];
};

export const ChatsList = ({ chats }: ChatsListProps): ReactElement => {
  const normalizedData = React.useMemo(() => normalizeData(chats), [chats]);
  return (
    <ul>
      {normalizedData.map(
        ({ id, recipientName, timestamp, lastMessage }, index) => (
          <li key={index}>
            <NavLink
              to={`/list/${id}`}
              className={({ isActive }) =>
                isActive ? styles.activeChat : styles.chat
              }
            >
              {({ isActive }) => (
                <>
                  <Avatar name={recipientName} />
                  <div className={styles.chatContent}>
                    <div className={styles.info}>
                      <span className={isActive ? styles.active : ""}>
                        {recipientName}
                      </span>
                      <span>{getTimeFromTimestamp(timestamp)}</span>
                    </div>
                    <div className={styles.lastMessage}>
                      <span>{lastMessage.text}</span>
                    </div>
                  </div>
                </>
              )}
            </NavLink>
          </li>
        ),
      )}
    </ul>
  );
};
