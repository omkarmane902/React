import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  InfiniteScroll  from 'react-infinite-scroll-component';
const LibraryInfiniteScroll = () => {

     let [data,setData]= useState([]);
     let [page,setPage] = useState(1)
     let [hasMore, setHasMore] = useState(true);

     let fatchdata = async()=>{
        let res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
        
       if(res.data.length == 0)
       {
            setHasMore(false)
            return;
       }
       setData((prev)=>{
        return(
           [...prev , ...res.data]
        )
       })
      setPage((prev) => {
          prev + 1
      });
     }

    
     useEffect(()=>{
         fatchdata()
     },[])

  
  return (
    <div>
       <h1>Library Infinite Scroll</h1>

       <InfiniteScroll 
       dataLength= {data.length}
       next={fatchdata}
       hasMore={hasMore}
       loader = {<h1>Loading...</h1>}
       endMessage={<h1>No more data............</h1>} 
       >
       
       {data.map((info,index)=>{
          return(
            <div key={`${info.id}-${index}`}>
                 <h3>{info.title}</h3>
            </div>
          )
       })}
       </InfiniteScroll>
     
        
    </div>
  )
}

export default LibraryInfiniteScroll