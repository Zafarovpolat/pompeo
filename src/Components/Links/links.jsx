import './links.css'

export const Links = ({ href, text, isActive }) => {
    return (
        <a className={`link ${isActive ? "link-active" : ""}`} href={href}>
            {text}
        </a>
    )
}
