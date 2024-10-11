import { FieldValues, useForm } from "react-hook-form"
import { UserRegister } from "../../schema/schema"
import { schema } from "../../schema/schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import Input from "../../components/input/"
import Button from "../../components/button"
import Select from "../../components/select"
import TextError from "../../components/textError"

const Home = () => {

  const [ valid, setValid ] = useState('')

  const { handleSubmit, register, formState: { errors } } = useForm<UserRegister>({ resolver: zodResolver(schema)})

  const onSubmit = (data: FieldValues) => {
    localStorage.setItem('formData', JSON.stringify(data))    
    setValid('Cadastro realizado com sucesso!')
  }

  const onError = () => {
    setValid('Erro ao enviar o formulário. Verifique os campos');
  }

  return (
    <div className="bg-gradient-to-r min-h-screen from-gray-700 via-gray-900 to-black flex flex-col text-textColor font-poppins justify-evenly p-5 gap-10">
      <h1 className="text-center text-3xl p-3 font-semibold ">Formulário de Cadastro de Membros</h1>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="flex flex-col items-center justify-center gap-5">

          <Input htmlForId="name" type="text" text="Nome completo" register={register} placeholder="ex: Maria Aparecida Oliveira"/>
          {errors.name && <TextError message={errors.name.message} />}

          <Input htmlForId="email" type="email" text="E-mail" register={register} placeholder="ex: maria@gmail.com"/>
          {errors.email && <TextError message={errors.email.message} />}

          <Input htmlForId="fone" type="tel" text="Telefone" register={register} placeholder="ex: (55) 98888-8888"/>
          {errors.fone && <TextError message={errors.fone.message}/>}

          <Select register={register}/>
          {errors.position && <TextError message={errors.position.message} />}

          <Input htmlForId="linkendin" type="url" text="LinkedIn" register={register} placeholder="ex: https://www.linkedin.com"/>
          {errors.linkendin && <TextError message={errors.linkendin.message} />}

          <Input htmlForId="github" type="url" text="GitHub" register={register} placeholder="ex: https://www.github.com"/>
          {errors.github && <TextError message={errors.github.message} />}

          <Button type="submit" text="Enviar"/>

          {valid && ( valid === "Cadastro realizado com sucesso!" ? <p className="text-green-600 bg-inputColor p-3 rounded-md font-bold text-center">{valid}</p> : <p className="text-red-600 bg-inputColor p-3 rounded-md font-bold text-center">{valid}</p>) }
        </div>
      </form>
    </div>
  )
}

export default Home