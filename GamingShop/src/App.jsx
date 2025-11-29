import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
const App  = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<h1 className="text-center mt-10 text-4xl">Welcome to the Shop!</h1>} />
      </Routes>
  )
}

export default App;