import { doc,collection, getDoc } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createUserData } from "../../Assets/Redux/Reducers/auth";
import { database } from "../../firebaseConfig";
const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    if (localStorage.hasOwnProperty("clientId")) {
      const cli_id = localStorage.getItem("clientId")
      if(cli_id){
      const docRef = doc(database, "users", cli_id );
      const docSnap = getDoc(docRef)
      console.log("data")
      console.log("user",docSnap.data())
    }
    }
    },[]);


  return <div>Home</div>;
};

export default Home;
