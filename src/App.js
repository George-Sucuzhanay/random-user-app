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
    setCurrentUser(randoUserInfo.results);

  }
  useEffect(() => {
    newUser()
  }, [])

  return (
    <div className="App">
      <Header/>
      <br></br>
      <button onClick={newUser}>⟳</button>
      {console.log(currentUser)}
      <div>{JSON.stringify(currentUser)}</div> 
      {newUser?.map((randomUser, index) => {
        return <UserSummary userData={currentUser}{...randomUser}index={index}
              />
      })}
      <User/>
      <UserSummary/>
    </div>
  );
}

export default App;
