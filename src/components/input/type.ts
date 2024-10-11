import { UseFormRegister } from "react-hook-form";
import { UserRegister } from "../../schema/schema";

export interface PropsInput {
    htmlForId: keyof UserRegister;
    type: string;
    text: string;
    register: UseFormRegister<UserRegister>;
    placeholder?: string;
}