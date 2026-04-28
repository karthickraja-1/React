import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"

function App() {


  return (
    <div className=''>
      <Routes>
        <Route path="/about" element={ <Layout /> } />
      </Routes>
    </div>
  )
}

export default App
