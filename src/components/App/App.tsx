import type { ReactElement } from "react";
import Gallery from "../Gallery/Gallery";
import { Route, Routes, useLocation } from "react-router-dom";
import NotFoundPage from "../../pages/NotFound/NotFound";
import { galleryData } from "../../data/Gallery";
import Card from "../Card/Card";

export default function App(): ReactElement {
  const location = useLocation();

  const backgroundLocation = location.state?.backgroundLocation;

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Gallery {...galleryData} />} />
        <Route path="/gallery/:imgIndex" element={<Card />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/gallery/:imgIndex" element={<Card />} />
        </Routes>
      )}
    </>
  );
}
