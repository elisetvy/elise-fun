import { BrowserRouter } from "react-router-dom"

import Landing from "./Landing"

function App() {

  return (
    <div className="bg-slate-50">
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    </div>
  )
}

export default App
