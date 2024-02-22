import "./card.css"
import cardImg from "./card.png"
import { Text } from "../Text/text"

export const Card = ({ heading, price }) => {
    return (
        <div className="cardBox">
            <a href="#" className="card">
                <div><img src={cardImg} alt="#" /></div>

                <Text type={"subheading"} text={heading}></Text>
                <Text type={"info"} text={price}></Text>
            </a>
        </div>
    )
}
