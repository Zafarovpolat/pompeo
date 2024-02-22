import "./update.css"
import updateImg from "./update.png"
import { Text } from "../Text/text"
import { Button } from "../Button/button"

export const Update = () => {
    return (
        <section className="update">
            <div className="container">
                <a href="#"><img className="updateImg" src={updateImg} alt="#" /></a>
                <Text type={"subheading"} text={"Latest News"}></Text>
                <Text type={"heading"} text={"Latest News & New updates"}></Text>

                <form action="" className="updateForm">
                    <div className="updateFormInp"><input type="email" placeholder="Enter your email" /><Button text={"Subscribe"}></Button></div>
                    <div className="updateFormCheck">
                        <input id="news" type="checkbox" />
                        <label htmlFor="news">Sign up for our newsletter</label>
                    </div>
                </form>
            </div>
        </section>
    )
}
