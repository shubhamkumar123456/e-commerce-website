import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import classes from './ContactUs.module.css'

const ContactUs = () => {

    const name=useRef();
    const email=useRef();
    const phone=useRef();

    const submitHandler=async()=>{
  
        let obj={
            name:name.current.value,
            email:email.current.value,
            phone:phone.current.value
        }
        console.log(obj)
        const response= await fetch('https://e-commerce-a4796-default-rtdb.firebaseio.com/contactUs.json',{
            method: 'POST',
            body:JSON.stringify(obj),
            headers:{
              'Content-Type': 'application/json',
            }
        })
        const data=await response.json()
        console.log(data)
    }

  return (
    <div className={classes.contactUs}>
    <form action="" className={classes.contactUsFrom}>
        <label className={classes.label} htmlFor="name">Name:</label>
        <input ref={name} className={classes.input} type="text" />
        <label className={classes.label} htmlFor="email">Email:</label>
        <input ref={email} className={classes.input} type="text" />
        <label className={classes.label} htmlFor="phone">Phone Number</label>
        <input ref={phone} className={classes.input} type="text" />
        <Button className={classes.btn} variant='success' onClick={submitHandler}>Submit</Button>
    </form>
    </div>
  )
}

export default ContactUs
