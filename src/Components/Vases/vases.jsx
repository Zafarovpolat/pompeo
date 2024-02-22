import "./vases.css"
import { VaseItem } from "../VaseItem/vaseitem"

export const Vases = () => {
    return (
        <section className="vases">
            <div className="container">
                <ul className="vasesList">
                    <li className="vasesListItem">
                        <VaseItem title={"Gold & Black Pottery"} info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."}></VaseItem>
                    </li>
                    <li className="vasesListItem">
                        <VaseItem title={"Gold & Black Pottery"} info={"Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."}></VaseItem>
                    </li>
                </ul>
            </div>
        </section>
    )
}
