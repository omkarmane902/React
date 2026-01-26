import React from 'react'
import Props2 from './Props2'

const props1 = ({...props}) => {
  return (
    <div>
      <Props2 props1 ={10}  props2 ={20}/>
    </div>
  )
}

export default props1
