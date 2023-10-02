import Header from "@/components/header"
import { CardButton } from "@/components/card_button"
import { useState } from "react"

interface PaginaCalculosInterface {
    id: number,
    valor: number
}



export default function PaginaCalculos(promps: PaginaCalculosInterface) {
    let[valor1, setValor1] = useState(0)
    let[valor2, setValor2] = useState(0)
    let[valor3, setValor3] = useState(0)

    function remover(num:number,func:any) {
        let number = num
        number = number > 0 ? --number : number
        func(number)
    }
    
    function adicionar(num: number, func: any):void {
        let number = num
        number++
        func(number)
    }

    function add(v:number,f:any){
        let val=v
        val++
        f(val)
    }

    return(
        <div className="flex flex-col">
            <Header />
            <div className="flex flex-row justify-start mt-[10px]">
                <CardButton id={1} valor={valor1} func={setValor1} increase={adicionar} decrease={remover}/>
                <CardButton id={2} valor={valor2} func={setValor2} increase={adicionar} decrease={remover}/>
                <CardButton id={3} valor={valor3} func={setValor3} increase={adicionar} decrease={remover}/>
            </div>
        </div>
    )
}