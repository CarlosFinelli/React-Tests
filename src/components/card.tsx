interface CardProps {
    id: number,
    valor: number,
    produto: string,
    img: string,
    promocao: boolean
}

function checkPromo(p: boolean) {
    if(p){
        console.log(p)
        return "promo"
    }
        
}

function checkStatus(num: number) {
    return (num == 0 ? false : true)
        
}

export function Card(props: CardProps) {
    return (
        <div className={`flex flex-col justify-center items-center w-[200px] h-[200px] bg-gradient-to-br from-[#311B92] to-[#673AB7] text-white rounded-md px-[20px] my-[15px] mx-[10px] shadow-md `+checkPromo(props.promocao)}>
            {props.promocao&&(
                <div className="text-[#ff0000] font-bold">
                    <h1>Promoção</h1>
                </div>
            )}
                <h1>{props.id}</h1>
                <h2 className="mx-[10px]">{props.produto}</h2>
                <h2>{props.valor}</h2>
                <img className="mx-[10px]" src={props.img} />
        </div>
    )
}