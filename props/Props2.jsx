import React from 'react'
import Props3 from './Props3'

const Props2 = ({...props}) => {
  return (
    <div>
      <Props3 props1 ={10}  props2 ={20} />
    </div>
  )
}

export default Props2
