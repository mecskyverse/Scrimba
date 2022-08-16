import React from "react"
import Git from "../Images/github.png"
import Fb from "../Images/fb.png"
import Twitter from "../Images/twitter.png"
import Ig from "../Images/ig.png"


export default function Footer() {
    return (
        <div className="footer">
            <a href="https://github.com/mecskyverse" target="_blank"><img src={Git} alt="git" className="icon" /></a>
            <a href="https://twitter.com/mecskyverse" target="_blank"><img src={Twitter} alt="twitter" className="icon" /></a>
            <a href="https://instagram.com/mecskyverse" target="_blank"><img src={Ig} alt="instagram" className="icon" /></a >
            <a href="#" target="_blank"><img src={Fb} alt="facebook" className="icon" /></a >
        </div >
    )

}