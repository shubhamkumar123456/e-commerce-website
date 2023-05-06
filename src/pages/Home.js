import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap'
const Home = () => {
  const tourlist=[
    {
      id:1,
      date:"JUL 16",
      location:"DETROIT,MI",
      description:"DTE ENERGY MUSIC THEATRE"
    },
    {
      id:2,
      date:"JUL 19",
      location:"TORONTO ,ON",
      description:"BUDWISER STAGE"
    },
    {
      id:3,
      date:"JUL 22",
      location:"BRISTOW, VA",
      description:"JIGGY LUBE LIVE"
    },
    {
      id:4,
      date:"AUG 2",
      location:"PHOENIX, AZ",
      description:"AK-CHIN PAVILION"
    },
    {
      id:5,
      date:"AUG 2",
      location:"LAS VEGAS ,NV",
      description:"T-MOBILE ARENA"
    },
    {
      id:6,
      date:"AUG 2",
      location:"CONCORD ,CA",
      description:"CONCORD PAVILION"
    },
  ]
  return (
    <div className='homepage'>
      <div className='homepageTop'>
          <h1>The Generics</h1>
          <h3>Get our Latest Album</h3>
          <i class="fas fa-circle-play"></i>
      </div>
      <div>
        <h1>Tours</h1>
        {tourlist.map((tour) =>{
          return<div className='homeTourMapDiv' key={tour.id}>
          <span>{tour.date}</span>
          <span>{tour.location}</span>
          <span>{tour.description}</span>
          <Button  variant="info">BUY TICKET</Button>
          </div>
         
          
        })}
      </div>
    </div>
  )
}

export default Home
