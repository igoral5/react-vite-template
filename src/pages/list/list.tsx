import { Avatar } from "@components/avatar/avatar";
import { ChatsList } from "@components/chats-list/chat-list";

import logoutImage from "../../images/logout.svg";
import { getChats } from "../../services/api";

import type { ChatInfo } from "@/types";
import { useMemo, type ChangeEvent, type ReactElement } from "react";

import styles from "./list.module.css";
import { Outlet, useLoaderData, useSearchParams } from "react-router-dom";
import { Input } from "@/components/input/input";

export async function loader(): Promise<{ chats: ChatInfo[] }> {
  const chats = await getChats();
  return { chats };
}

export const ListPage = (): ReactElement => {
  const { chats } = useLoaderData<{ chats: ChatInfo[] }>();

  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  const filtredChats = useMemo(() => {
    const filter = searchParams.get("filter");
    if (!filter) {
      return chats;
    }
    return chats.filter(
      (chat) =>
        chat.recipientName
          .toLocaleLowerCase()
          .replace("ё", "е")
          .indexOf(filter.toLocaleLowerCase().replace("ё", "е")) > -1,
    );
  }, [searchParams]);

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        <div className={styles.searchbar}>
          <Avatar name={"A"} />
          <Input
            placeholder="Поиск"
            onChange={onChange}
            value={searchParams.get("filter") ?? ""}
          />
          <div className={styles.link}>
            <img alt="logout" src={logoutImage} />
          </div>
        </div>
        <ChatsList chats={filtredChats} />
      </div>
      <Outlet />
    </div>
  );
};
