import { PropsInput } from "./type"

const Input = ({htmlForId, type, text, register, placeholder} : PropsInput) => {
    return(
        <div className="flex flex-col w-3/4 gap-2">
            <label htmlFor={htmlForId}>{text}</label>
            <input className="text-sm border-none rounded-md p-4 h-12 bg-inputColor" id={htmlForId} type={type} {...register(htmlForId)} placeholder={placeholder}/>
        </div>
    )
}

export default Input