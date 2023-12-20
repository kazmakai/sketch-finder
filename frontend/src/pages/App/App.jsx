import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from '../AuthPage';
import AuthPage from '../AuthPage';
import ExplorePage from '../ExplorePage';
import ProfilePage from '../ProfilePage';
import Navbar from "../../components/NavBar";

const App = () => {
  return (
    <main>
      <>
        <Routes>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
