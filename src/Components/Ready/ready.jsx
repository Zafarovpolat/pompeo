import "./ready.css"
import { Text } from "../Text/text"
import { Button } from "../Button/button"

export const Ready = () => {
    return (
        <section className="ready">
            <div className="container">
                <div className="readyWrapper">
                    <Text type={"subheading"} text={"Pompeo Pottery"}></Text>
                    <Text type={"heading"} text={"Ready to start shopping?"}></Text>
                    <Text type={"info"} text={["Lorem ipsum dolor sit amet, ", <span>consectetur adipiscing elit. </span>, "Suspendisse varius enim in eros elementum."]}></Text>

                    <Button type={"main"} text={"New Collection"}></Button>
                </div>
            </div>
        </section>
    )
}
