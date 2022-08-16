import React from "react"
import About from "./About"
import Link from "../Images/linkedln.png"
import Email from "../Images/Button.png"
export default function Info() {
    return (
        <div>

            <div className="name">Aakash Verma</div>
            <div className="front"> FrontEnd Developer</div>
            <div className="web"><a href="http://github.com/mecskyverse" className="web">meckskyverse.com</a>
            </div>
            <div className="div-icon">
                <a href="https://github.com/mecskyverse" target="_blank"><img src={Link} alt="git" className="info-icon" /></a>
                <a href="https://github.com/mecskyverse" target="_blank"><img src={Email} alt="git" className="info-icon" /></a>
            </div>
        </div>
    );
}