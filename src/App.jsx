import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
// using promises
useEffect(() =>{
  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then((res)=> setMyData(res.data))
  .catch((error) => setIsError(error.message));
  // console.log(res.data)
  // );
},[]);

  return (
    <>
      <h1>Axios</h1>
      {isError != "" && <h2>{isError}</h2>}
      <div className='grid'>
      {myData.map((post)=>{
         const{id,title,body}=post;
         return <div className='card' key={id}>
          <h2>{title}</h2>
          <p>{body}</p>
         </div>

      })
      
      }
      </div>
    </>
  )
}

export default App
