import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './Context'


const Home = () => {
  const name = useGlobalContext()
  return (
    <>
    <h1>This is Home Page</h1>
    <p>Name is <span style={{color:"red"}}>{name}</span></p>
    </>
  )
}

export default Home