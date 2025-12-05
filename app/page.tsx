"use client"

import { useState } from "react"

export default function Login(){
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
    if(loginData.email === "" || loginData.senha ===""){
      alert("Usuário ou senha inválidos")
      return
    }
    else{
      alert("Login efetuado com sucesso!")
      console.log(loginData)
    }
  }

  return(
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      <div className="w-[30vw] bg-black flex flex-col">
          <label>
            Email
          </label>
          <input
          value={loginData.email}
          onChange={(evento)=>{atualizaInput(evento, "email")}}
          type="text"
          placeholder="email@myemail.com"
          />
          <label>
            Senha
          </label>
          <input
          value={loginData.senha}
          onChange={(evento)=>{atualizaInput(evento, "senha")}}
          type="password"
          placeholder="********"
          />

          <input
          type="submit"
          onClick={entrar}
          value="Entrar"
          className="bg-green-700 hover:bg-green-500"
          />

      </div>
    </div>
  )
}