import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const { id } = useParams();
  return (
    <>
      <h1>This is Single Movie <span style={{color:"red"}}>{id}</span></h1>
    </>
  )
}

export default SingleMovie