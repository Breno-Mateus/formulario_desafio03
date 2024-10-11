import { PropsButton } from "./type"

const Button = ({type, text} : PropsButton) => {
    return (
        <button className="w-20 h-8 bg-inputColor rounded-md font-bold hover:bg-hoverColor" type={type}>{text}</button>
    )
}

export default Button