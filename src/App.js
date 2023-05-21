import RegistrationForm from "./pages/Registration-Form";
import Dashboard from "./pages/Dashboard";
import Card from "./pages/Food"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className="App">
      {/* <RegistrationForm/> */}
      <BrowserRouter>
      
      <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Register" element={<RegistrationForm />}></Route>
          <Route path="/Card" element={<Card/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
