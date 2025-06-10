import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const[numberall, setnumberall] = useState(false);
  const[charAll, setcharAll] = useState(false);
  const[password, setpassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)


  const paswordGenerator = useCallback(() => {
   let pass = ""
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if(numberall) {
    str += "0123456789"
  }if(charAll){
    str+="!@#$%^&*[]_+-{}~"

  }
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setpassword(pass);
  }, [length,numberall, charAll, setpassword])
    
 const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,length)
  window.navigator.clipboard.writeText(password)
 },
 [length,password])

  useEffect(() => {
    paswordGenerator()
  }, [length, numberall, charAll, paswordGenerator])



  return (
  
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-emerald-50 bg-neutral-800 '>
      <h3 className='text-white text-center my-3 text-s'>Password Generator</h3>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
           <input className='outline-none w-full py-1 px-3 bg-white text-black  rounded=md'
           type="text"
           value={password}
           placeholder="password"
           readOnly
           ref={passwordRef}
           />
           <button 
           onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-black px-3 py-0.5 shrink-0 hover:bg-blue-500'>copy</button>  
      </div>
      <div classname="flex text-sm gap-x-2">
        <div className='flex items-center gap-x'>
          <input
          type="range"
          min={8}
          max={50}
          value={length}
          className='cursor-pointer text-white bg-pink'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1' >
          <input
          type="checkbox"
          defaultCheck={numberall}
          id='numberInput'
          onChange={() => {
            setnumberall((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'
        >
          <input
          type="checkbox"
          defaultCheck={charAll}
          id='CharacterInput'
          onChange={() => {
            setcharAll((prev) => !prev);
          }}
          />
          <label htmlFor='CharacterInput'>Characters</label>
        </div>
      </div>
     </div>
   
  )
}

export default App
