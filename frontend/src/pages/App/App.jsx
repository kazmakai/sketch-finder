import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import ExplorePage from '../ExplorePage';
import ProfilePage from '../ProfilePage';
import ArtworkDetailPage from "../ArtworkDetailPage";
import ArtworkListPage from "../ArtworkListPage";

const App = () => {
  return (
    <main>
      <>
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/artworklist/:id" element={<ArtworkListPage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
