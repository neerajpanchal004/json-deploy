import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setdata] = useState([])
  const port = import.meta.env.VITE_PORT;

  async function fetchData() {
    try {
      let res = await fetch(port);
      let data = await res.json();
      setdata(data)
  

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    fetchData()
  }, [])
  if(data.length==0){
    return <h1>LOADING</h1>
  }

  return (

    <div className='text-3xl text-red-800 my-52'>
      {data.map((pro)=>{
        return <div>
          <h1>{pro.name}</h1>
          <h1>{pro.price}</h1>
        </div>
      })}
    </div>
  )
}

export default App