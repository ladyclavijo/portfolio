import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import Curriculum from "./components/Curriculum/curriculum";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";


function App () {

    return (
        <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/curriculum" element={<Curriculum />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default App;