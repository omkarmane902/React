import React from 'react'
import { useState } from 'react'

const Task1 = () => {
    let [state,setState] = useState({
        task:"",
        id:Date.now()
    })

    let handelChange =(e)=>{
        setState({...state,task:e.target.value})
    }

    let [list,setList] = useState([
        {id:1, task:"this is react"}
    ])

    let submit =(e)=>{
        e.preventDefault();
        setList([...list ,state])
        setState({
            task:"",
            id:Date.now()
        })
    }

    let handelDelete =(id)=>{
        let updatelist = list.filter((toda)=>{
            return toda.id != id
        })
        setList(updatelist);
    }

    let handelUpdate =(todo)=>{
        setState({
            task:todo.task,
            id:Date.now()
        })
        handelDelete(todo.id)
    }

  return (
    <div style={{ fontFamily:"Arial, sans-serif" }}>

        {/* Form */}
        <div style={{ display:"flex", justifyContent:"center", margin:"20px" }}>
            <form style={{ display:"flex", gap:"10px" }}>
                <input
                    type="text"
                    onChange={handelChange}
                    value={state.task}
                    style={{
                        padding:"8px 12px",
                        border:"2px solid #ccc",
                        borderRadius:"6px",
                        width:"250px"
                    }}
                />
                <button
                    onClick={submit}
                    style={{
                        padding:"8px 14px",
                        border:"none",
                        borderRadius:"6px",
                        backgroundColor:"#2563eb",
                        color:"white",
                        cursor:"pointer"
                    }}
                >
                    Add Task
                </button>
            </form>
        </div>

        {/* Table */}
        <div>
            <table
                style={{
                    width:"70%",
                    margin:"auto",
                    borderCollapse:"collapse"
                }}
            >
                <thead style={{ backgroundColor:"#111827", color:"white" }}>
                    <tr>
                        <th style={{ padding:"12px", border:"1px solid #e5e7eb" }}>Task</th>
                        <th style={{ padding:"12px", border:"1px solid #e5e7eb" }}>Update</th>
                        <th style={{ padding:"12px", border:"1px solid #e5e7eb" }}>Delete</th>
                    </tr>
                </thead>

                {list.map((todo)=>{
                    return(
                        <tbody key={todo.id}>
                            <tr>
                                <td style={{ padding:"10px", border:"1px solid #e5e7eb", textAlign:"center" }}>
                                    {todo.task}
                                </td>

                                <td style={{ padding:"10px", border:"1px solid #e5e7eb" }}>
                                    <button
                                        onClick={()=>{handelUpdate(todo)}}
                                        style={{
                                            padding:"6px 12px",
                                            backgroundColor:"#16a34a",
                                            color:"white",
                                            border:"none",
                                            borderRadius:"5px",
                                            cursor:"pointer"
                                        }}
                                    >
                                        Update
                                    </button>
                                </td>

                                <td style={{ padding:"10px", border:"1px solid #e5e7eb" }}>
                                    <button
                                        onClick={()=>{handelDelete(todo.id)}}
                                        style={{
                                            padding:"6px 12px",
                                            backgroundColor:"#dc2626",
                                            color:"white",
                                            border:"none",
                                            borderRadius:"5px",
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

export default Task1
