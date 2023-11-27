import { BrowserRouter } from "react-router-dom"

import Banner from "./Banner";
import Landing from "./Landing"
import LatestProject from "./LatestProject";
import LatestExperience from "./LatestExperience";
import Contact from "./Contact";

function App() {

  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Banner />
        <Landing />
        {/* <LatestProject />
        <LatestExperience />
        <Contact /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
