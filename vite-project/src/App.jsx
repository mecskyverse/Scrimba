import React from "react"
import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interest from "./components/Interests.jsx"
// import Footer from "./components/Footer.js"

export default function App() {
  return (
    <div className="container">

      <div className="profile"></div>
      <div className="block">
        <Info />
        <About />
        <Interest />
      </div>



    </div>

  )
}