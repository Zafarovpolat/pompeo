import "./plateitem.css"

export const PlateItem = ({ text, bcg, border, img }) => {
    return (
        <div className="plateItem" style={{ backgroundColor: bcg, borderColor: border }}>
            <img src={img} alt="#" />
            <h3>{text}</h3>
        </div>
    )
}
