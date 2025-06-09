import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
function  MyApp(){
  return(
    <div>
      <h1>custom App!</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     props:{
//         href: 'https://goole.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// }
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const Anotheruser = "Riddhimaand React"
const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'Click me to visit Google',
  Anotheruser
)

createRoot(document.getElementById('root')).render(
 
 <App/>
)
