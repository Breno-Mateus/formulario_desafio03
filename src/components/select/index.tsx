import { PropsSelect } from "./type"
import Option from "../option-tag"

const Select = ({register} : PropsSelect) => {
    return (
        <div className="flex flex-col w-3/4 gap-2">
            <label htmlFor="position">Cargo pretendido</label>
            <select className="h-12 p-2 bg-inputColor rounded-md" id="position" {...register('position')} >
              <option className="text-black" value="">Escolha...</option>
              <Option textValue="Desenvolvedor Frontend" />
              <Option textValue="Desenvolvedor Backend" />
              <Option textValue="Desenvolvedor Full Stack" />
              <Option textValue="Desenvolvedor Mobile" />
              <Option textValue="Desenvolvedor de Software" />
              <Option textValue="Engenheiro de Software" />
              <Option textValue="Arquiteto de Software" />
              <Option textValue="UI/UX Designer" />
              <Option textValue="Analista de Sistemas" />
              <Option textValue="Analista Programador" />
              <Option textValue="DevOps Engineer" />
              <Option textValue="Engenheiro de Dados" />
              <Option textValue="QA Engineer" />
              <Option textValue="Scrum Master" />
              <Option textValue="Product Owner" />
            </select>
          </div>
    )
}

export default Select