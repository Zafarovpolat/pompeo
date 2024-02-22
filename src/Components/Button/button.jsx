import { useState } from "react"
import "./button.css"

export const Button = ({ text, icon, type, func, stl }) => {

    if (type === "burger") {
        return (
            <div>
                <button onClick={func} className={`btn ${type === "burger" ? "burger" : " "} ${type === "burger-close" ? "burger-close" : " "} ${type === "main" ? "mainBtn" : " "}`}>
                    {icon}
                    {text}
                </button>
            </div>
        )
    }

    else if (type === "burger-close") {
        return (
            <div>
                <button style={stl} onClick={func} className={`btn ${type === "burger" ? "burger" : " "} ${type === "burger-close" ? "burger-close" : " "} ${type === "main" ? "mainBtn" : " "}`}>
                    {icon}
                    {text}
                </button>
            </div>
        )
    }

    else {
        return (
            <div>
                <button className={`btn ${type === "burger" ? "burger" : " "} ${type === "burger-close" ? "burger-close" : " "} ${type === "main" ? "mainBtn" : " "}`}>
                    {icon}
                    {text}
                </button>
            </div>
        )
    }
}