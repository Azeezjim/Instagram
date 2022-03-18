import userEvent from "@testing-library/user-event";
import React, { useState, useContext, useEffect } from "react"; 
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FirebaseContext from '../context/firebase'
import * as ROUTES from '../constants/routes.js';
import { doseUsernameExist } from "../services/firebase";

export default function Signup() {
  const history = useHistory();
  const {firebase} = useContext(FirebaseContext);

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPasswords] = useState('');

  const [error, setError] = useState('');
  const isInvalid = password ==='' || emailAdress === ''; 

  const handleSignUp = async (event) => {
    event.preventDefault();

    const usernameExist = await doseUsernameExist(userName);
    console.log('usernameExixt', usernameExist?.[0])

    if(!usernameExist?.[0]) {
      try { 
        const createdUserResult = await firebase
        .auth()
        .createUserWithEmailAndPassword(emailAdress, password);
        console.log("createdUserResult", createdUserResult);
        // authentication 
        // email address & password & username (displayname)
        await createdUserResult.user.updateProfile({
          displayName: userName  
        });

        // firebase user collection ( create a document)
        await firebase
          .firestore()
          .collection('users')
          .add({
            userId: createdUserResult.user.uid,
            username: userName.toLowerCase(),
            fullName,
            emailAddress: emailAdress.toLowerCase(),
            following: [],
            dateCreated: Date.now()
      });

      history.push(ROUTES.DASHBOARD);
      } catch (error) {
        setFullName('');
        setEmailAdress('');
        setPasswords('');
        setError(error.message);
      }
    } else {   
        setError('That usernmae is already taken, please try another ')
      }
    }

  useEffect(() => {
    document.title = "Log up Instagram"
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

        {error && <p className="mb-4 text-red-primary">{error} </p>}

        <form onSubmit={handleSignUp} method="POST">

        <input 
          type="text"
          aria-label="Enter your username"
          placeholder="Usernmae"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          onChange={({target}) => setUserName( target.value) } 
          value= {userName}
          />

        <input 
          type="text"
          aria-label="Enter your full nmae"
          placeholder="Full Name"
          className="text-sm text-gray-base w-full py-5 px-4 h-2 bordeer border-gray-primary rounded mb-2"
          onChange={({target}) => setFullName ( target.value) } 
          value= {fullName}
          />


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
          onChange={({target}) => setPasswords( target.value) } 
          value= {password}
          />
          <button 
          disabled={isInvalid}
          type="submit"
          className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && `opacity-50`}`}
          > Sign Up </button>
        </form>
      </div> 
      <div className=" flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
        <p className="text-sm"> H6ave an account? {''} </p>
        <Link to={ROUTES.LOGIN} className=" font-bold text-blue-medium ">Login</Link>
        </div>
      </div>
    </div>
    ) 
}