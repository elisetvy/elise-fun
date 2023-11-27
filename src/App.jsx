import { BrowserRouter } from "react-router-dom"

import Banner from "./Banner";
import Landing from "./Landing"
import Foqal from "./Foqal";
import Friender from "./Friender";
import NK from "./NK";
import Contact from "./Contact";

function App() {

  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Banner />
        <Landing />
        <Foqal />
        <Friender />
        <NK />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App
