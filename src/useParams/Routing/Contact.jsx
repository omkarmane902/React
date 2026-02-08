import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  const parems = useParams()
  return (
    <div>
      <h1>Name:{parems.name}</h1>
      <h1>Contact:{parems.contact}</h1>
      <h1>Default page of Contact</h1>
    </div>
  )
}

export default Contact