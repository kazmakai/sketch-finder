import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import ExplorePage from '../ExplorePage';
import UploadPage from '../UploadPage';
import ProfilePage from '../ProfilePage';
import Navbar from "../../components/Navbar";
import ArtworkListPage from "../ArtworkListPage";
import './App.css';

const App = () => {
  return (
    <main>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<ExplorePage />} />
          <Route path="/artworklist/:id" element={<ArtworkListPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
