import React, { useState } from 'react'



const Task = () => {
    let [data,setdata] = useState([]);
 let apicall = async () => {  
     let strem = await fetch("https://api.github.com/users");
      setdata(await strem.json())
    }
    console.log(data);
    
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'20px'}}>
      <button style={{height:'40px', width:'100px',border:'none',borderRadius:'21px'}} onClick={apicall}>Api Call</button>
      <div style={{display:'flex',flexWrap :'wrap',justifyContent:'center', gap:'10px' }}>{
          data.map((user,index)=>{
            return(
                <div key={index} style={{display:'flex' ,flexDirection:'column', gap:'10px',height:'550px',width:'400px', border :'1px solid,black', borderRadius:'21px',justifyContent:'center',alignItems:'center', boxShadow: '2px 2px 10px #555050'}}>
                   <h1>User Name :{user.login}</h1>
                    <img src={user.avatar_url} alt="" width={'300px'}  height={'300px'}  style={{borderRadius:'21px'}} />
                     <div style={{display:'flex', gap:'15px'}}>
                      <p><b>{user.type}</b></p>
                      <p>{user.user_view_type}</p>
                      <p>{user.site_admin}</p>
                     </div>
                     <button style={{width :'200px',height:'50px', background : 'black', border:'none', borderRadius:'21px'}}><a style={{color : 'white', textDecoration:'none' }} href={user.html_url}>GitHub Profile</a></button>
                </div>  
            )
          })
        
        }</div>
    </div>
  )
}
export default Task