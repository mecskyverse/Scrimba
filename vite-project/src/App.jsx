import React from "react"
import Info from "./components/Info.jsx"
import About from "./components/About.jsx"
import Interest from "./components/Interests.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return (
    <div className="container">

      <div className="profile shadow"></div>
      <div className="block shadow">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>



    </div>

  )
}