"use client"

import { useRouter } from 'next/navigation'

import {
    Lollipop,
    LogOut,
    ShoppingCart,
    Shell
} from 'lucide-react' //ícones

import Image from  'next/image' //é quem sobe as imagens

const estilosdoincone = {
    size: 20,
    color: "#ffb5c0",
    strokeWidth: 2
}

const estilosdoincone2 = {
    size: 70,
    color: "#C11C84",
    strokeWidth: 2
}

const linkImagem = "" //um para cada link/imagem

export default function Sidebar(){
     const router = useRouter ()

     return(
          <div className="w-[16vw] bg-pink-200 flex flex-col items-center justify-around">
               <div className="flex flex-col gap-2">
                    <Lollipop 
                    size={estilosdoincone2.size} 
                    color={estilosdoincone2.color}
                    strokeWidth={estilosdoincone2.strokeWidth}/>
               </div>

               <br>
               </br>
               <div className="flex flex-col gap-2">
                    <span 
                    onClick={() => { window.location.href = "https://www.ifood.com.br/" }}
                    className="flex gap-2 px-2 bg-pink-700 rounded-xl p-2 w-full cursor-pointer justify-start hover:bg-pink-500">
                         <ShoppingCart 
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