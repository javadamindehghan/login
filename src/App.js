import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Login from './login/Login'
import Register from './register/Register';
import { useDispatch, useSelector } from 'react-redux';
import Main from './Main';
import { adduser } from './action/adduser';
import jwt_decode from "jwt-decode";
import { Route, Routes, Location, useLocation } from 'react-router';
import Enter from './Enter';
import { ToastContainer } from 'react-toastify';

function App() {
  const [tset, setstate] = useState(0)
  const [force, setforce] = useState(0)

  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const datatoken = jwt_decode(token);
      const dateNow = Date.now() / 1000;


      if (datatoken.exp < dateNow)
        localStorage.removeItem("token");
      else { dispatch(adduser(datatoken.user)) }
    }

  }, [])



  const state = useSelector(state => state)

  if (state.fullname) {
    return( <>
    <Main />
    <ToastContainer position='bottom-right'/>
      </>
      )
  }


  return (
    <>
    <Enter />
    <ToastContainer position='bottom-right'/>
    </>
  )










}

export default App;
