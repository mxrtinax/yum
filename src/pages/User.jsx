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
    <FormStyle>
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
      </FormStyle>
    )
}

const FormStyle = styled.form`
    margin: 0rem 20rem;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        margin: 0.7rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
    button{
    margin-left: 30%;
    margin-top: 10px;
    background: linear-gradient(35deg,#ed3434, #6c1d1d);
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 40%;
    color: white;
    }
    h3{
      margin-top: 30px;
    }
`

export default User