import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [msgerror, setMsgerror] = useState(null);

  const RegisterUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        navigate('/');
      })
      .catch((e) => {
        if (e.code === 'auth/weak-password') {
          setMsgerror('password must be 6 characters or more');
        }
      });
  };

  const LoginUser = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        navigate('/');
      })
      .catch((e) => {
        if (e.code === 'auth/wrong-password') {
          setMsgerror('Password is incorrect');
        }
      });
  };
  return (
    <div className="row mt-5">
      <div className="col"></div>
      <div className="col">
        <form onSubmit={RegisterUser} className="form-group">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            placeholder="introduce el mail"
            type="email"
          />
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="form-control mt-4"
            placeholder="enter the password"
            type="password"
          />
          <input
            className="btn btn-dark btn-block mt-4"
            value="Register user"
            type="submit"
          />
        </form>
        <button onClick={LoginUser} className="btn btn-success btn-block">
          Log in
        </button>
        {msgerror ? <div>{msgerror}</div> : <span />}
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
