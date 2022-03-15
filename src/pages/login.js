import userEvent from "@testing-library/user-event";
import React, { useState, useContext, useEffect } from "react"; 
import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase'

export default function Login() {
  const history = useHistory();
  const {firebase } = useContext(FirebaseContext);

  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPasswords] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password ==='' || emailAdress === ''; 

  const handleLogin = () => {};

  useEffect(() => {
    document.title = "Login Instagram"
  }, [])
  
  return (
    <div className="container flex max-auto max-w-screen-md items-center h-screen">
      <div className="flex m-3/5">  
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with instagram app" />
      </div>
      <div className="flex flex-col m2/5">
        <h1 className="flex flec-col w-full">
          <img src="/images/logo.png" alt="Instagram" className="mt-2 width-612" />
        </h1>

        {error && <p className="mb-4 text-red-ptimary">{error} </p>}

        <form onSubmit={handleLogin} method="POST">
          <input 
          type="text"
          aria-label="Enter your email address"
          placeholder="Email address"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          onChange={({target}) => setEmailAdress('t.v', target.value) } 
          />

<input 
          type="password"
          aria-label="password"
          placeholder="Passsword"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          
          />
        </form>
      </div>
    </div>
    ) 
}