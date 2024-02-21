import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [sports,setSports]=useState([]);
 const fetchData=()=>{ fetch('http://localhost:3001/sports')
  .then(response => response.json())
  .then(data => {

    setSports(data);
    console.log(data);// Do something with the fetched data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
        {sports.map((sport)=>(
          <p key={sport.source.id}>
            Title:{sport.title}
          </p>
        
        ))}
          <br/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
