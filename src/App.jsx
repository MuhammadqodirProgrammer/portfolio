import { Route, Routes } from "react-router-dom";
import { FixedNav } from "./components/FixedNav/FixedNav";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Home } from "./pages/Home/Home";
import { Portfolio } from "./pages/Portfolio/Portfolio";
import { Skills } from "./pages/Skills/Skills";
function App() {
  return <>
   <FixedNav />
   
   <Routes >
    <Route  path="/" element={<Home />} />
    <Route  path="/about" element={<About />} />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/skills" element={<Skills />} />
    <Route  path="/portfolio" element={<Portfolio />} />
   </Routes>
  </>
}


export default App;
