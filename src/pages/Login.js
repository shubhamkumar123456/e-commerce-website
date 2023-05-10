import React, { useContext, useRef, useState } from 'react'
import classes from './Login.module.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { CartContext } from '../store/CartContext';



const Login = () => {
    const history =useNavigate()
    const emailRef=useRef()
    const passwordRef=useRef()
  
         const authCtx= useContext(CartContext)
  
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setisLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
  
  
    const submitHandler=(e)=>{
      e.preventDefault();
      const email=emailRef.current.value
      const password=passwordRef.current.value
  
      setisLoading(true)
      let url;
      if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaM3UYLKuh1tJ9Za2j7aU0P2vKKp9LLxo'
      }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaM3UYLKuh1tJ9Za2j7aU0P2vKKp9LLxo'
      }
      fetch(url,{
        method: 'POST',
        body:JSON.stringify({
          email:email,
          password:password,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((res)=>{
        setisLoading(false)
        if(res.ok){
          return res.json()
        }else{
         return res.json().then((data)=>{
            let errorMessage= "Authentication failed!"
            // if(data && data.error && data.error.message){
            //   errorMessage = data.error.message;
            // }
            // alert(error.message)
            throw new Error(errorMessage)
          })
        }
      }).then((data)=>{
        authCtx.loginHandler(data.idToken);
        authCtx.addEmail(data.email)
        const newEmail=data.email.split('@');
        const splitEmail=newEmail[0]+newEmail[1].split('.')[0]+newEmail[1].split('.')[1]
        fetch(`https://crudcrud.com/api/b9fe1f4630584350b95476ca51713d48/cart${splitEmail}`,{
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
          }
      }).then((res)=>res.json().then((data)=>{
       
        authCtx.setItem(data[data.length - 1].items)
        console.log(data[data.length - 1].items)
        }))
 
      

        // authCtx.setItem()
        // localStorage.setItem('auth_token', data.idToken)
        history('/store')
  
        console.log(data)
      }).catch((error)=>{  alert(error.message)})
  

    }
    return (
        <section className={classes.auth}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required  ref={emailRef}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Your Password</label>
            <input
              type='password'
              id='password'
              required
              ref={passwordRef}
            />
          </div>
          <div className={classes.actions}>
           {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
           {isLoading && <p>sending request...</p>}
            <button
              type='button'
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </section>
    )
}

export default Login
