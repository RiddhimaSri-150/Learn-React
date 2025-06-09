import{useState} from 'react'
// import reactLogo from './assests/react.svg'
// import viteLogo from '/vite.svg'
import'./App.css'
// import Read from './Read'
import Card from './components/Card'

function App() {
 
  const [color, setColor] = useState("Lavender")
  return (
   <div className='w-full h-screen duration-200'style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >
         <div className=' flex flex-wrap justify-center gap-3 shadow-g bg-white px-5 py- 6
         rounded-3xl '>
          <button onClick={() => setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white
          shadow-lg'style = {{backgroundColor: "red"}}>
            Red
          </button>
          <button onClick={() => setColor("pink")}className='outline-none px-4 py-1 rounded-full text-black
          shadow-lg'style = {{backgroundColor: " pink"}}>
           Pink
          </button>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white
          shadow-lg'style = {{backgroundColor: "Green"}}>
           Green
          </button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white
          shadow-lg'style = {{backgroundColor: "blue"}}>
            Blue
          </button>
         </div>
    </div>
   </div>
  )
}

export default App
