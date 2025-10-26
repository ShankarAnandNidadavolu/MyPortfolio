
import Home from "./Home"


import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Resume from "./Resume";


import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { skill: "Android Studio", level: 75 },
    { skill: "React", level: 50 },
    { skill: "Firebase", level: 60 },
    { skill: "Java", level: 60 },
    { skill: "3d Modeling", level: 70 },
    { skill: "Figma", level: 80 },
  ];

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home skills={skills} />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>

    
  );
}

export default App;
