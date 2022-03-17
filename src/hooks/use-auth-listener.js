import { useState, useEffect, useContext } from "react";
import FirebaseContext from "../context/firebase";

export default function useAuthListener () {

  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('authUsers')));
  const {firebase} =useContext(FirebaseContext);   

  useEffect(() => {
    const listner = firebase.auth().onAuthStateChange((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      }
    } )
  })

  return (

  )
}