export type MessageInfo = {
  id: number;
  senderId: number;
  text: string;
  timestamp: number;
  repliedTo?: number;
};

export type ChatInfo = {
  id: number;
  recipientName: string;
  lastSeen: number;
  recipientId: number;
  messages: MessageInfo[];
};

export type NormalizedChatInfo = {
  id: number;
  recipientName: string;
  timestamp: number;
  lastMessage: MessageInfo;
};
