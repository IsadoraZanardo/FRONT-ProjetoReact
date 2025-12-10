"use client"

import { useRouter } from 'next/navigation'
import { useState } from "react"

export default function Login(){
  const router = useRouter()

  const [loginData, setLoginData] = useState({
    email: "",
    senha: ""
  })

  const atualizaInput = (evento:any, tipoInput:string) => {
    if(tipoInput === "email"){
      setLoginData({
        email: evento.target.value,
        senha: loginData.senha
      })
    }
    else{
      setLoginData({
        email: loginData.email,
        senha: evento.target.value
      })
    }
  }

  const entrar = ()=>{
    if (loginData.email === "" || loginData.senha === "") {
      alert("Usuário ou senha inválidos")
      return
    }

    router.push("/order")
  }

  return(
    <div className="bg-pink-100 w-screen h-screen flex items-center justify-center">
      <div className="w-[30vw] bg-white flex flex-col p-3 rounded-xl">
          <label>
            Email
          </label>
          <input
          value={loginData.email}
          onChange={(evento)=>{atualizaInput(evento, "email")}}
          type="text"
          placeholder=" quero100@porfavor.com.br"
          className="border-b-2 border-black outline-none focus:border-pink-700"
          />

        <br>
        </br>

          <label>
            Senha
          </label>
          <input
          value={loginData.senha}
          onChange={(evento)=>{atualizaInput(evento, "senha")}}
          type="password"
          placeholder=" *************"
          className="border-b-2 border-black outline-none focus:border-pink-700"
          />

        <br>
        </br>

          <input
          type="submit"
          onClick={entrar}
          value="Login"
          className="bg-pink-700 hover:bg-pink-500 rounded-xl"
          />

      </div>
    </div>
  )
}