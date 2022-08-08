import React from "react"
import Info from "./components/Info.js"
import About from "./components/About.js"
import Interest from "./components/Interests.js"
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