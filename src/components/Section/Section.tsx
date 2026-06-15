import { useContext, type ReactElement, type ReactNode } from "react";
import style from "./Section.module.scss";
import { LevelContext } from "../../service/LevelContext";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps): ReactElement {
  const level = useContext(LevelContext);
  return (
    <section className={style.section}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
