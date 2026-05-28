import type { ReactElement, ReactNode } from "react";
import style from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): ReactElement {
  return <main className={style.root}>{children}</main>;
}
