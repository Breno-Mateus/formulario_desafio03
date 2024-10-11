import { PropsTextError } from "./type"

const TextError = ({message} : PropsTextError) => {
    return (
        <p className="text-red-600 w-3/4 font-bold">{message}</p>
    )
}

export default TextError