import React from "react"
import Git from "../Images/github.png"
import Fb from "../Images/fb.png"
import Twitter from "../Images/twitter.png"
import Ig from "../Images/ig.png"


export default function Footer() {
    return (
        <div className="footer">
            <img src={Git} alt="" className="icon" />
            <img src={Twitter} alt="" className="icon" />
            <img src={Ig} alt="" className="icon" />
            <img src={Fb} alt="" className="icon" />



        </div>
    )

}