import { ChatPage, ListPage, LoginPage, NotFoundPage } from "@/pages";
import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";


export default function App(): ReactElement {
  return (<Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/list" element={<ListPage />}>
      <Route path="1" element={<ChatPage /> } />
      <Route path="2" element={<ChatPage /> } />
      <Route path="3" element={<ChatPage /> } />
      <Route path="4" element={<ChatPage /> } />
      <Route path="5" element={<ChatPage /> } />
    </Route>
    <Route path="*" element={<NotFoundPage />} />
  </Routes>);
}
