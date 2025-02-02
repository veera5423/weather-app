

import { Route,Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Features from "./components/Features";
import About from "./components/About";


function App() {
  return (
    <div>
      <NavBar/>
      <SearchPage/>
      
      <Routes>
        <Route path="/home" element={<SearchPage />} />
        <Route path="/features" element={<Features/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      

      

    
    <Footer />

    </div>
    
  );
}

export default App;
