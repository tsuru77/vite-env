import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //globalThis.import_meta_env = JSON.parse('"import_meta_env_placeholder"');
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <h1>Env var: {import.meta.env.VITE_APITEST} </h1>
     <script>
      globalThis.import_meta_env = JSON.parse('"import_meta_env_placeholder"');
    </script>
    </>
  )
}

export default App
