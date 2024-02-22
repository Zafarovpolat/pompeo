import vaseImg from "./vase.png"
import { Text } from "../Text/text"
import { Links } from "../Links/links"
import "./vaseitem.css"

export const VaseItem = ({ title, info }) => {
    return (
        <li className="vaseItem">
            <div className="vaseItemImg">
                <img src={vaseImg} alt="#" />
            </div>

            <div className="vaseItemText">
                <Text type={'heading'} text={title}></Text>
                <Text type={'info'} text={info}></Text>
                <Links text={"View Details"} />
            </div>
        </li>
    )
}