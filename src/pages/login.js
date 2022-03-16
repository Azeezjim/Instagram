import userEvent from "@testing-library/user-event";
import React, { useState, useContext, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes.js';

export default function Login() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPasswords] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password ==='' || emailAdress === ''; 

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAdress, password)
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAdress('');
      setPasswords('');
      setError(error.message )
    }
  };

  useEffect(() => {
    document.title = "Login Instagram"
  }, [])
  
  return (
    <div className="container flex max-auto max-w-screen-md items-center h-screen">
      <div className="flex m-3/5">  
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with instagram app" />
      </div>
      <div className="flex flex-col m-2/5">
        <div className="flex flex-col item-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex flec-col w-full">
          <img src="/images/logo.png" alt="Instagram" className="mt-2 width-612" />
        </h1>

        {error && <p className="mb-4 text-red-pimary">{error} </p>}

        <form onSubmit={handleLogin} method="POST">
          <input 
          type="text"
          aria-label="Enter your email address"
          placeholder="Email address"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          onChange={({target}) => setEmailAdress( target.value) }
          value= {emailAdress}
          />

          <input 
          type="password"
          aria-label="password"
          placeholder="Passsword"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          onChange={({target}) => setPasswords('t.v', target.value) } 
          value= {password}
          />
          <button 
          disabled={isInvalid}
          type="submit"
          className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && `opacity-50`}`}
          > Log In </button>
        </form>
      </div> 
      <div className=" flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm"> Don't have an account? {''} </p>
        <Link to={ROUTES.SIGN_UP} className=" font-bold text-blue-medium ">Sign up</Link>
        </div>
      </div>
    </div>
    ) 
}