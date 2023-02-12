import React from 'react';
import { useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../firebase-config';
import styled from 'styled-components';

function User() {

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const register = async() =>{
    try {
    const user = await createUserWithEmailAndPassword(
      auth,
      registerEmail, 
      registerPassword
      );
    console.log(user)
    }catch (error){
      console.log(error.message);
    }
  };

  const login = async() =>{
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail, 
        loginPassword
        );
      console.log(user)
      }catch (error){
        console.log(error.message);
      }
  };

  const logout = async() =>{
    await signOut(auth);
  };

  return (
    <div className="styled-yum">
    <div className="App">
      <div>
        <h3> Create user</h3>
        <input placeholder='email'  
          onChange={(event)=>{
            setRegisterEmail(event.target.value);
        }}/>
        <input placeholder='password'  
          onChange={(event)=>{
            setRegisterPassword(event.target.value);
        }}/>
        <button onClick={register}>Create user</button>
      </div>

      <div>
        <h3> Login</h3>
        <input placeholder='email'
          onChange={(event)=>{
            setLoginEmail(event.target.value);
        }}/>
        <input placeholder='password' 
         onChange={(event)=>{
          setLoginPassword(event.target.value);
        }}/>
        <button onClick={login}>Login</button>
      </div>

      <div>
        <h3> User logged in</h3>
        {user ? user.email : "Not Logged In"}

        <button onClick={logout}>Log out</button>
      </div>

      </div>
      </div>
    )
}

export default User