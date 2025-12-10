import Sidebar from "@/app/componentes/Sidebar"

interface IArea {
    titulo: string,
    children?: React.ReactNode
}

export default function Areautil({titulo, children}:IArea){
  return(
    <div className="w-screen h-screen bg-green-800 flex">
        <Sidebar/>
        <div className="w-full h-full bg-white px-[4vw] py-[8vh] flex-col gap-4">
          <h1 className="text-2xl font-semibold">{titulo}</h1>
          {children}
        </div>
    </div>
  )
}