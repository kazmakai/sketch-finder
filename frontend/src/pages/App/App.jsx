import { useEffect, useState } from "react"
import AuthPage from '../AuthPage';
import ExplorePage from '../ExplorePage';
import ProfilePage from '../ProfilePage';

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/test');
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Coming Soon</h1>
      <p>{message}</p>
      
    </main>
  );
}

export default App
