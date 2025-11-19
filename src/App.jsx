import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BackgroundComponent from "./components/Background"
import PasswordGenerator from "./components/PasswordGenerator"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackgroundComponent />} />
        <Route path="pgen" element={<PasswordGenerator />} />
      </Routes>
    </Router>
  )
}

export default App
