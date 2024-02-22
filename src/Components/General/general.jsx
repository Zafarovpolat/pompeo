import { HeaderSection } from "../Header/header"
import { Porceclain } from "../Porceclain/porceclain";
import { Vases } from "../Vases/vases";
import { Collection } from "../Collection/collection";
import { Ready } from "../Ready/ready";
import { Update } from "../Update/update";
import { Footer } from "../Footer/footer"

export const MainStructure = () => {
    return (
        <>
            <HeaderSection />

            <main>
                <Porceclain></Porceclain>

                <Vases></Vases>

                <Collection></Collection>

                <Ready></Ready>

                <Update></Update>
            </main>

            <Footer></Footer>

        </>
    )
}

export default MainStructure;