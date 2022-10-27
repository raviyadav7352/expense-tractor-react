import './Button.css'
const Button = (props) => {
    return(
        <button className="buttonc">{props.children}</button>
    )
}
export default Button;