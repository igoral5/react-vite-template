import { Suspense, type ReactElement } from "react";
import { Link, useLoaderData } from "react-router-dom";
import style from "./Posts.module.scss";
import { PostList } from "../PostList/PostList";

export function Posts(): ReactElement {
  const { posts } = useLoaderData();

  return (
    <div className={style.container}>
      <h1>Посты</h1>
      <Suspense fallback="Загрузка...">
        <PostList postsPromise={posts} />
      </Suspense>
      <Link to="/posts/add">
        <button>Добавить пост</button>
      </Link>
    </div>
  );
}
