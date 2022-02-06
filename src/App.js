import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import User from './components/User';
import UserSummary from './components/UserSummary';
import fetchUser from './services/rando_user';
function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const newUser = async() => {
    const randoUserInfo = await fetchUser();
    setCurrentUser(randoUserInfo);
  }
  useEffect(() => {
    newUser()
  }, [])

  return (
    <div className="App">
      <Header/>
      <br></br>
      <button onClick={newUser}>Click me for new User!</button>
      {/* {currentUser?.map((randomUser, index) => {
        return <User {...randomUser} index={index}/>
      })} */}

      <UserSummary userData={currentUser} />

    </div>
  );
}

export default App;
