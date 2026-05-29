import type { ChatInfo, MessageInfo, NormalizedChatInfo } from '../types';

export const getChats = (): Promise<ChatInfo[]> =>
  import('../data/chats.json').then(({ chats }) => chats);

export const getLastMessage = (messages: MessageInfo[]): MessageInfo | undefined => {
  return [...messages].pop();
};

export const normalizeData = (chats: ChatInfo[]): NormalizedChatInfo[] => {
  return chats
    .map(({ recipientName, id, messages }) => {
      const lastMessage = getLastMessage(messages);

      if (!lastMessage) {
        return undefined;
      }

      return {
        recipientName,
        id,
        timestamp: lastMessage.timestamp,
        lastMessage: lastMessage,
      };
    })
    .filter((task) => task !== undefined);
};
