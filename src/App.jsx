import React, { useEffect,useState } from 'react'

const App = () => {
const port = import.meta.env.VITE_PORT;
const [data, setData] = useState([])

  async function fetchData(){
    try {
      let res = await fetch(`${port}/products`)
      let data = await res.json()
      setData(data)

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
 
  useEffect(()=>{
    fetchData()
  },[])
  
  if(data.length==0){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <h1 className='text-center mt-20'>JSON-SERVER</h1>
    <div className='flex m-10 p-10 justify-center gap-10'>
      
      {data.map((product)=>{
        const {id,price,image,name}= product;
        return <div key={id} className='border-2 border-black p-5'>
          <h1>{name}</h1>
          <img src={image} alt={name} className='w-32 h-32 object-cover'/>
          <p>{name}</p>
          <p>{price}</p>
        </div>
      })}
    </div>
    </>
  )
}

export default App