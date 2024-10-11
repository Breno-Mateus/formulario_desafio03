import { UseFormRegister } from "react-hook-form";
import { UserRegister } from "../../schema/schema";

export interface PropsSelect {
    register: UseFormRegister<UserRegister>;
}