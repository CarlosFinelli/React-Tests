interface PaginaProdutosProps {

}
//import data from "../../public/my_products"
import Link from "next/link"
import { Card } from "@/components/card"
import { useEffect, useState } from "react"
import Header from "@/components/header"


import data from "../../data/my_products.json"

export default function PaginaProdutos(props: PaginaProdutosProps) {
    let[test, setTest] = useState(1)
    let[cardsprodutos, setCardsprodutos] = useState<any[]>([])

    useEffect(() => {
        montaCards()
    }, [])

    function montaCards() {
        setCardsprodutos(
            data.map((item) => {
                if(item.status != 0)
                    return <Card id={item.id} produto={item.produto} valor={item.valor} img={item.img} promocao={item.promocao}/>
            //console.log(item)
            })
        )
        
    }

    return(
        <div className="flex flex-col">
        <Header />
        <div className="flex flex-row">
            {cardsprodutos}
        </div>
            <button className="bg-cyan-800 cursor-pointer text-white mt-[10px]" onClick={() => setTest(test + 1)}>Adicionar</button>
            {test}
        </div>
    )
}