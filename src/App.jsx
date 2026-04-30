import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Property from "./pages/Property";
import Listings from "./pages/Listings";

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path="/" element={ <Layout /> } >
          <Route index element={ <Dashboard /> } ></Route>
          <Route path="/clients" element={ <Clients/>}></Route>
          <Route path="/property" element={ <Property/>}></Route>
          <Route path="/listings" element={ <Listings/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
