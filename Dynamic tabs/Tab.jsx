import React from 'react'
const Tab = () => {
    const [tab , setTab]= React.useState('all')
  return (
    <div className='tab-container'> 
        <div> 
             <button  onClick={()=>setTab("all")}>All</button>
             <button  onClick={()=>setTab("tab1")}>Tab-1</button>
             <button  onClick={()=>setTab("tab2")}>Tab-2</button>
             <button  onClick={()=>setTab("tab3")}>Tab-3</button>
        </div>
         <div className='tab1' style={{display:tab==='all'|| tab==='tab1'?'block':'none'}}>
            <p>Lorem 1 ipsum, dolor sit amet consectetur adipisicing elit. Quia quaerat in saepe nulla dicta, eveniet, molestias odit deleniti quasi incidunt ut asperiores officia et earum modi, voluptatum debitis enim illo!</p>
         </div>
         <div className='tab2' style={{display:tab==='all'|| tab==='tab2'?'block':'none'}}>
            <p>If you want, I can also give you 10 actual machine-round questions with requirements only (no solutions) so you can solve them yourself like a real interview.</p>
         </div>
         <div className='tab3' style={{display:tab==='all'|| tab==='tab3'?'block':'none'}}>
            <p>A current machine-coding guide similarly recommends clarifying scope first, shipping the baseline functionality, then adding edge cases and accessibility/performance improvements.!</p>
         </div>
    </div>
      
         
    
  )
}

export default Tab
