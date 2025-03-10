import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
      <div className="w-full h-screen duration-200 relative " style={{backgroundColor: color}}>
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-red-100 via-blue-100 to-green-100 rounded-2xl p-2 shadow-lg">A background changer app</h1>
        <div className='flex flex-wrap justify-center items-center gap-4 fixed bottom-12 border-2 border-black rounded-md w-90 justify-self-center left-1/2 transform -translate-x-1/2 shadow-md rounded-3xl p-1 bg-gradient-to-r from-red-100 via-blue-100 to-green-100'>
          <button className='bg-red-500 text-white px-4 py-2 rounded-md w-30 shadow-md rounded-3xl p-3 hover:shadow-red-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1' 
          onClick={() => setcolor('red')} 
          >Red</button>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md w-30 shadow-lg rounded-3xl p-3 hover:shadow-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
          onClick={() => setcolor('blue')}>Blue</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-md w-30 shadow-xl rounded-3xl p-3 hover:shadow-green-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-1 border-black'
          onClick={() => setcolor('green')}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
