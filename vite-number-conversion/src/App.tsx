import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "@arco-design/web-react/dist/css/arco.css";
import PageMain from './pages/PageMain';
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'dark');
  },[])
  return (
    <div>
      
      <PageMain></PageMain>
    </div>
    
  )
}

export default App
