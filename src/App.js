import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './pages/Homescreen/HomeScreen';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login/Login';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile/Profile';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          const email = user.email;
          dispatch(login({
            uid: uid,
            email: email,
            }))
          
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(logout());
        }
      });

      return unSubscribe;
  }, [dispatch])
  

  

  return (
    <div className="App">
      {!user ? 
      (
        <Login />
      ):
      (
        <Router>

        <Routes>
          <Route path='/profile' element={<Profile  />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </Router>
      )
    }
      
    </div>
  );
}

export default App;
