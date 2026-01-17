import React from 'react'
import PropsTask2 from './PropsTask2'

const PropsTask1 = (props) => {
    let {num1 ,num2}=props
  return (
    <div>
      <PropsTask2 num1 = {num1} num2={num2}/>
    </div>
  )
}

export default PropsTask1
