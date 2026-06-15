import type { ReactElement } from "react";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { addPost, loadPosts } from "../../api";
import { Posts } from "../Posts/Posts";
import { CreatePost } from "../CreatePost/CreatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
    loader: () => {
      return { posts: loadPosts() };
    },
  },
  {
    path: "/posts/add",
    element: <CreatePost />,
    action: async ({ request }) => {
      // Получаем объект FormData с данными формы
      const formData = await request.formData();
      // Обрабатываем данные
      const data = Object.fromEntries(formData.entries());
      await addPost(data.text as string);
      return redirect("/");
    },
  },
]);

export default function App(): ReactElement {
  return <RouterProvider router={router} />;
}
