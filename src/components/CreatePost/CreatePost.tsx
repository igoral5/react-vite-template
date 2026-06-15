import type { ReactElement } from "react";
import { Form } from "react-router-dom";
import style from "./CreatePost.module.scss"

export function CreatePost(): ReactElement {
    return (
      <Form className={style.container} method="post" action="/posts/add">
        <input type="text" name="text" />
        <button type="submit">Создать пост</button>
      </Form>
  );
}