import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Menu from './components/Menu';
import { auth } from './firebaseConfig';
import { Container } from 'react-bootstrap';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      }
    });
  }, [user]);
  return (
    <Container fluid>
      <Router>
        {/*The menu component contains the button to log out if the user is logged in. It also has the home button, if the user is logged in, the user is redirected to the main page to make inquiries to the API, otherwise it is redirected to the login */}
        <Menu />
        <Routes>
          {/* If the user is not logged in, you can only access the login screen, but it does not show the start of the page */}
          {user ? (
            <>
              <Route exact path="/" element={<Home />}></Route>
            </>
          ) : (
            <>
              <Route exact path="/login" element={<Login />}></Route>
            </>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
