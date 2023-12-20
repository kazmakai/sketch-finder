import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from '../Page';
import AuthPage from '../AuthPage';
import ExplorePage from '../ExplorePage';
import ProfilePage from '../ProfilePage';
import Navbar from "../../components/NavBar";

const App = () => {
  const [user, setUser] = useState(getUser)
  return (
    <main>
      { user ?
      <>
        <Navbar user={user}/>
        <Routes>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </>
      :
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/auth' element={<AuthPage setUser={setUser}/>}/>
        </Routes>
      </>
      }

    </main>
  );
}

export default App;
