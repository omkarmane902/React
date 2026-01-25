import React, { useState } from 'react'

const Task = () => {
  let [list,setList] = useState([
  { id: 1, task: "Learn JavaScript", done: false },
  { id: 2, task: "Practice React", done: false },
  { id: 3, task: "Build Todo App", done: false },
  { id: 4, task: "Revise CSS & Tailwind", done: false },
  { id: 5, task: "Push code to GitHub", done: false }
  ]);
  let [state,setState] = useState({
       id :Date.now(),
       task:"",
       done:false
  })
  let handelChange =(e)=>{
      setState({...state,task:e.target.value})
  }
  let submit =(e)=>{
    e.preventDefault();
    setList([...list,{...state,done: false}])
    setState({
      id :Date.now(),
      task:"",
      done: false
    })

  }
  let deleteTask =(id)=>{
   let updatelist = list.filter((data)=>{
    return(
      data.id !=id
    )
   })

   setList(updatelist)
  }
  let updateTask=(todo)=>{
    setState({
        id :todo.id,
        task:todo.task
    })
    deleteTask(todo.id)
  }

  let remarkTask =(id)=>{

  setList(list.map((todo)=>{
    return(
      todo.id ===id ?{...todo,done:!todo.done}:todo
    )
  })
);
};
  

  
  return (
    <div style={{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",background:"#f1f5f9",padding:"30px"}}>
         
         <div>
              <form 
                action="" 
                style={{
                  display:"flex",
                  flexDirection:"column",
                  alignItems:"center",
                  gap:"12px",
                  background:"#fff",
                  padding:"20px",
                  borderRadius:"10px",
                  boxShadow:"0 8px 20px rgba(0,0,0,0.15)"
                }}   
              >
                    <input 
                      type="text" 
                      onChange={handelChange} 
                      value={state.task}
                      style={{
                        padding:"8px 12px",
                        border:"2px solid #6366f1",
                        borderRadius:"6px",
                        width:"250px",
                        fontSize:"16px"
                      }}
                    />
                    <button 
                      onClick={submit}
                      style={{
                        padding:"8px 16px",
                        border:"none",
                        background:"#6366f1",
                        color:"#fff",
                        borderRadius:"6px",
                        cursor:"pointer",
                        fontWeight:"bold"
                      }}
                    >
                      Add Task
                    </button>
              </form>
         </div>

         <div style={{marginTop:"30px"}}>
              <table 
                style={{
                  borderCollapse:"collapse",
                  background:"#fff",
                  boxShadow:"0 8px 20px rgba(0,0,0,0.15)",
                  borderRadius:"10px",
                  overflow:"hidden"
                }}
              >
                    <thead style={{background:"#e0e7ff"}}>
                          <tr>
                            <th style={{padding:"12px"}}>Task</th>
                            <th style={{padding:"12px"}}>Update</th>
                            <th style={{padding:"12px"}}>Remark</th>
                            <th style={{padding:"12px"}}>Delete</th>
                          </tr>
                    </thead>

                    {list.map((toto)=>{
                        return(
                           <tbody key={toto.id}>
                                  <tr>
                                     <td 
                                       style={{
                                         padding:"10px 16px",
                                         textDecoration:toto.done?'line-through':'none'
                                       }}
                                     >
                                       {toto.task}
                                     </td>

                                     <td style={{padding:"10px"}}>
                                       <button 
                                         onClick={()=>{updateTask(toto)}}
                                         style={{
                                           padding:"6px 10px",
                                           border:"1px solid #0ea5e9",
                                           background:"#e0f2fe",
                                           cursor:"pointer"
                                         }}
                                       >
                                         Update
                                       </button>
                                     </td>

                                     <td style={{padding:"10px"}}>
                                       <button 
                                         onClick={()=>{remarkTask(toto.id)}}
                                         style={{
                                           padding:"6px 10px",
                                           border:"1px solid #22c55e",
                                           background:"#dcfce7",
                                           cursor:"pointer"
                                         }}
                                       >
                                         Remark
                                       </button>
                                     </td>

                                     <td style={{padding:"10px"}}>
                                       <button 
                                         onClick={()=>{deleteTask(toto.id)}}
                                         style={{
                                           padding:"6px 10px",
                                           border:"1px solid #ef4444",
                                           background:"#fee2e2",
                                           cursor:"pointer"
                                         }}
                                       >
                                         Delete
                                       </button>
                                     </td>
                                  </tr>
                           </tbody>
                        )
                    })}
              </table>
         </div>
    </div>
  )
}

export default Task
