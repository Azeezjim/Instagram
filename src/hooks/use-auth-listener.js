import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener () {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUser')));
  const {firebase} =useContext(FirebaseContext);

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // we have a user so we can store the user in localStorage
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        // we don't have a user so clear
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });
    return () => listner()
  }, [firebase])

  return (
    {user}  
  )
}