import "./text.css"

export const Text = ({ text, type }) => {

    if (type === "heading") {
        return (
            <h2 className="heading">{text}</h2>
        )
    }

    else if (type === "subheading") {
        return (
            <h3 className="subheading">{text}</h3>
        )
    }

    else if (type === "info") {
        return (
            <p className="info">{text}</p>
        )
    }

    else {
        return (
            <div>{text}</div>
        )
    }
}
