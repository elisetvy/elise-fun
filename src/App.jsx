import { BrowserRouter } from "react-router-dom"

import Landing from "./Landing"
import LatestProject from "./LatestProject";
import LatestExperience from "./LatestExperience";
import Contact from "./Contact";

function App() {

  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Landing />
        <LatestProject />
        <LatestExperience />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App
