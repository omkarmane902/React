import React from 'react'

const PropsTask4 = ({num1,num2,num3 = "abhi"}) => {
  return (
    <div>
     <h1>{num1}</h1>
     <h1>{num2}</h1>
     <h1>{num3}</h1>

    </div>
  )
}

export default PropsTask4