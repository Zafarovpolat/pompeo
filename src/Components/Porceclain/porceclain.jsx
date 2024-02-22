import './porceclain.css'
import { Text } from '../Text/text'
import { PlateItem } from '../PlateItem/plateitem'

export const Porceclain = () => {
    return (
        <section className='porceclain'>
            <div className="container">
                <Text text={"Product Categories"} type={"subheading"}></Text>
                <Text text={"Porcelain Pottery"} type={"heading"}></Text>
                <ul className="porceclainPlateList">
                    <li className='porceclainPlateListItem'>
                        <a href="#">
                            <PlateItem text={"Vases"} bcg={"rgb(228, 179, 102)"} border={"#D8AA61"} img={"../Porceclain/1.jpg"}></PlateItem>
                        </a>
                    </li>

                    <li className='porceclainPlateListItem'>
                        <a href="#">
                            <PlateItem text={"Mugs"} bcg={"#F05B10"} border={"#E4560F"} img={"../../../assets/images/plate1.svg"}></PlateItem>
                        </a>
                    </li>

                    <li className='porceclainPlateListItem'>
                        <a href="#">
                            <PlateItem text={"Plates"} bcg={"#A21010"} border={"#9A0F0F"} img={"../../../assets/images/plate1.svg"}></PlateItem>
                        </a>
                    </li>
                </ul>
                <ul className="porceclainTextList">
                    <li className='porceclainTextListItem'>
                        <Text type={"heading"} text={"Hand Grafted \n Pottery since 1990"}></Text>
                        <Text type={"info"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."}></Text>
                    </li>
                    <li className='porceclainTextListItem'>
                        <Text type={"heading"} text={"Hand Grafted \n Pottery since 1990"}></Text>
                        <Text type={"info"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere."}></Text>
                    </li>
                </ul>
            </div>
        </section>
    )
}
