import "./collection.css"
import { Card } from "../Card/card"
import { Text } from "../Text/text"
import { Button } from "../Button/button"

export const Collection = () => {
    return (
        <section className="collection">
            <div className="container">
                <Text type={"subheading"} text={"Our Online Stroe"}></Text>
                <Text type={"heading"} text={"Pottery collection"}></Text>

                <ul className="collectionList">
                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>

                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>

                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>

                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>

                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>

                    <li className="colletcionListItem">
                        <Card heading={"Decor Plate"} price={"65.00 USD"}></Card>
                    </li>
                </ul>

                <Button text={"View all products"} type={"main"}></Button>
            </div>
        </section>
    )
}
