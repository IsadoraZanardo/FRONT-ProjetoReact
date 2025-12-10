"use client"

import { useRouter } from 'next/navigation'

import {
    Lollipop,
    LogOut
} from 'lucide-react' //ícones

import Image from  'next/image' //é quem sobe as imagens

const estilosdoincone = {
    size: 20,
    color: "#ffb5c0",
    strokeWidth: 2
}

const linkImagem = "" //um para cada link/imagem

export default function Sidebar(){
     const router = useRouter ()

     return(
          <div className="w-[16vw] bg-pink-200 flex flex-col items-center justify-around">
               <div className="flex flex-col gap-2">
                    <Image
                    src={linkImagem}
                    alt="Logo não disponível :("
                    width={100}
                    height={100}
                    />
               </div>

               <div className="flex flex-col gap-2">
                    <span 
                    onClick={() => { window.location.href = "https://www.ifood.com.br/" }}
                    className="flex gap-2 px-2 bg-pink-700 rounded-xl p-2 w-full cursor-pointer justify-start hover:bg-pink-500">
                         <Lollipop 
                         size={estilosdoincone.size} 
                         color={estilosdoincone.color}
                         strokeWidth={estilosdoincone.strokeWidth}/>
                         <p>iFood</p>
                    </span>

                    <span
                    onClick={()=>{router.push('http://localhost:3000')}}
                    className="flex gap-2 px-2 bg-pink-700 rounded-xl p-2 w-full cursor-pointer justify-start hover:bg-pink-500">
                         <LogOut
                         size={estilosdoincone.size} 
                         color={estilosdoincone.color}
                         strokeWidth={estilosdoincone.strokeWidth}/>
                         <p>Logout</p>
                    </span>

                    </div>
               </div>
     )
}