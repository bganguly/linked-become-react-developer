import './App.css';
import {Routes, Route } from 'react-router-dom';
import {
  Home, About, Events, 
  Contact, Whoops404,
  Services, CompanyHistory, Location
} from "./pages"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}>
          <Route path="services" element={<Services/>}></Route>
          <Route path="history" element={<CompanyHistory/>}></Route>
          <Route path="location" element={<Location/>}></Route>
        </Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<Whoops404/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
