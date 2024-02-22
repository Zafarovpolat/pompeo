import { useState } from "react"
import "./navbar.css"
import { Logo } from "../Logo/logo"
import { Links } from "../Links/links"
import { Button } from "../Button/button"

export const Navbar = () => {

    const [menu, menuState] = useState("headerListHidden")

    if (window.innerWidth > 700) {
        return (
            <nav>
                <div className="container">
                    <Logo text={"Pompeo"}></Logo>

                    <ul className="headerList">
                        <li className="headerListItem"><Links text={"Home"} isActive={true}></Links></li>
                        <li className="headerListItem"><Links text={"About"}></Links></li>
                        <li className="headerListItem"><Links text={"Shop"}></Links></li>
                        <li className="headerListItem"><Links text={"Contact"}></Links></li>
                        <li className="headerListItem"><Button text={"Cart"} icon={<i className="fa-solid fa-cart-shopping"></i>}></Button></li>
                    </ul>

                    <div className="headerBurger">
                        <Button func={() => {
                            menuState('headerListVisible')

                        }} icon={<i className="fa-solid fa-bars"></i>} type={"burger"}></Button>
                        <Button stl={{ display: menu === "headerListVisible" ? "flex" : "none" }} func={() => {
                            menuState('headerListHidden')
                        }} icon={<i className="fa-solid fa-xmark"></i>} type={"burger-close"}></Button>
                    </div>
                </div>
            </nav >
        )
    }

    else {
        return (
            <nav>
                <div className="container">
                    <Logo text={"Pompeo"}></Logo>

                    <ul className="headerList" style={{ display: menu === "headerListVisible" ? "flex" : "none" }}>
                        <li className="headerListItem"><Links text={"Home"} isActive={true}></Links></li>
                        <li className="headerListItem"><Links text={"About"}></Links></li>
                        <li className="headerListItem"><Links text={"Shop"}></Links></li>
                        <li className="headerListItem"><Links text={"Contact"}></Links></li>
                        <li className="headerListItem"><Button text={"Cart"} icon={<i className="fa-solid fa-cart-shopping"></i>}></Button></li>
                    </ul>

                    <div className="headerBurger">
                        <Button func={() => {
                            menuState('headerListVisible')

                        }} icon={<i className="fa-solid fa-bars"></i>} type={"burger"}></Button>
                        <Button stl={{ display: menu === "headerListVisible" ? "flex" : "none" }} func={() => {
                            menuState('headerListHidden')
                        }} icon={<i className="fa-solid fa-xmark"></i>} type={"burger-close"}></Button>
                    </div>
                </div>
            </nav >
        )
    }
}