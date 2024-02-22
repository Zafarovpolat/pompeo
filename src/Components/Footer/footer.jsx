import "./footer.css"
import { Logo } from "../Logo/logo"
import { Text } from "../Text/text"
import { Contact } from "../Contact/contact"

export const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Logo text={"Pompeo"}></Logo>

                <Text type={"info"} text={"I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed."}></Text>

                <ul className="footerList">
                    <li className="footerListItem">
                        <Contact type={"mailto"} icon={<i class="fa-regular fa-envelope"></i>} title={"EMAIL"} info={"pompeopotery@gmail.com"}></Contact>
                    </li>

                    <li className="footerListItem">
                        <Contact link={"#"} icon={<i class="fa-solid fa-location-dot"></i>} title={"FIND"} info={["Central Park, Manhattan", <br></br>, "New York, 1101"]}></Contact>
                    </li>

                    <li className="footerListItem">
                        <Contact type={"callto"} icon={<i class="fa-solid fa-phone"></i>} title={"CALL"} info={"+1 292 345 678"}></Contact>
                    </li>
                </ul>
            </div>

            <div className="footerBottom">
                <div className="container">
                    <p>Template design by</p>
                    <a href="#">Dorian Hoxha</a>
                    <p>-</p>
                    <a href="#">Image License Info</a>
                    <p>Powered by</p>
                    <a href="#">Webflow</a>
                </div>
            </div>
        </footer>
    )
}
