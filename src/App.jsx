import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Customizer from "./pages/Customizer"

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/customize"
          element={<Customizer />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App