import "./logo.css"

export const Logo = function ({ text }) {
    return (
        <div className="logo">
            <a href="./">
                {text}
            </a>
        </div>
    )
}