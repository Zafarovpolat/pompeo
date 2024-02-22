import "./header.css"
import { Navbar } from "../Navbar/navbar"
import { Text } from "../Text/text"
import { Button } from "../Button/button"

export const HeaderSection = () => {
    return (
        <>
            <header className="header">
                <Navbar />

                <div className="container">
                    <div className="headerWrapper">
                        <Text text={"Pompeo Pottery"} type={"subheading"} />
                        <Text text={`Unique Porcelain \n Stone Collection`} type={"heading"} />
                        <Text text={"Unique & modern pottery made by our master in porcelain & stones"} type={"info"} />
                        <Button text={"Shop Collection"} type={"main"}></Button>
                    </div>
                </div>
            </header>
        </>
    )
}