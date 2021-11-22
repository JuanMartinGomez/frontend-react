import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const Menu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.email);
      } else {
        navigate('/login');
      }
    });
  }, [user]);

  const Logout = () => {
    auth.signOut();
    setUser(null);
    navigate('/');
  };
  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Button href="/login">Home</Button>
          {user ? (
            <Nav className="justify-content-end" style={{ width: '100%' }}>
              <Button className="btn btn-danger" onClick={Logout} href="/">
                Sign out
              </Button>
            </Nav>
          ) : (
            <span />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
