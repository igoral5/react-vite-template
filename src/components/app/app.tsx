import { ChatPage, ListPage, LoginPage, NotFoundPage } from "@/pages";
import { loader as chatLoader } from "@/pages/list/list";
import type { ReactElement } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
    children: [
      {
        path: ":chatId",
        element: <ChatPage />,
      },
    ],
    loader: chatLoader,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App(): ReactElement {
  return <RouterProvider router={router} />;
}
