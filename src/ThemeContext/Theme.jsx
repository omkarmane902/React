import React, { useContext } from 'react'
import { store } from './ThemeContext'

const Theme = () => {
    let {dark,isDark} = useContext(store)    
  return (
    <div>
      <button onClick={()=>{isDark(!dark)}}>Toggal</button> 
        <div id={dark?"dark":" "}>
           <p style={{border:'2px,solid,black', padding:'116px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis minus consectetur sed ad voluptates possimus itaque maxime vel doloribus, soluta perspiciatis dolorum incidunt ea quasi natus exercitationem! Itaque numquam culpa nam iusto beatae alias nemo optio eligendi distinctio blanditiis provident odit dolor corrupti consequuntur nihil facere libero, aliquid, maxime laboriosam quas dolore rem deleniti excepturi. Est quia eaque nemo minus, quaerat voluptatibus eum in tempore voluptatum dolores iure libero obcaecati molestiae, veniam minima quas repellendus tempora praesentium. Odit cupiditate dignissimos veniam! Numquam iusto officiis odit ad accusamus vero sequi. Culpa molestias officiis dolore, esse nemo quod quasi corporis iste ratione aliquam excepturi autem earum itaque? Quod iure cupiditate est. Soluta, obcaecati numquam ipsum alias praesentium adipisci eos vitae, sequi consequatur animi optio sed? Dolore dicta magni esse veniam debitis suscipit ex placeat delectus molestiae vero, sint fuga consequuntur iure iste quos cupiditate enim vel blanditiis doloremque sit assumenda! Quam sequi temporibus doloremque dignissimos asperiores iste porro id ex numquam expedita, modi soluta quia ipsum officiis cum vitae illum possimus. Eveniet expedita consequuntur delectus perspiciatis, non enim asperiores illum culpa quia aliquam nostrum ad earum? Laudantium sint voluptatem nesciunt animi. Corporis veniam accusantium asperiores, incidunt sint expedita nesciunt perspiciatis qui?</p>
        </div>
    </div>
  )
}

export default Theme