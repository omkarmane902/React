import React from 'react'
import PropsTask4 from './PropsTask4'

const PropsTask3 = (props) => {

    let {num1 ,num2}=props
  return (
    <div>
       <PropsTask4 num1 = {num1} num2={num2} num3 = "omakr"/>
    </div>
  )
}

export default PropsTask3