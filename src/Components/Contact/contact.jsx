import "./contact.css"
import { Text } from "../Text/text"

export const Contact = ({ icon, title, info, type, link }) => {
    if (type === "mailto") {
        return (
            <a href={`mailto:${info}`} className="contact">
                {icon}
                <Text type={"subheading"} text={title}></Text>
                <Text type={"info"} text={info}></Text>
            </a>
        )
    }

    else if (type === "callto") {
        return (
            <a href={`callto:${info}`} className="contact">
                {icon}
                <Text type={"subheading"} text={title}></Text>
                <Text type={"info"} text={info}></Text>
            </a>
        )
    }

    else {
        return (
            <a href={link} className="contact">
                {icon}
                <Text type={"subheading"} text={title}></Text>
                <Text type={"info"} text={info}></Text>
            </a>
        )
    }
}
