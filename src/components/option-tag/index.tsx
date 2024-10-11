import { PropsOption } from "./type"

const Option = ({textValue} : PropsOption) => {
    return (
        <option className="text-black" value={textValue}>{textValue}</option>
    )
}

export default Option