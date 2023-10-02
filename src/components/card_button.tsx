interface CardButtonProps {
    id: number,
    valor: number,
    func: any,
    increase: (num: number,func: any)=>void
    decrease: (num: number, func: any) => void
}

export function CardButton(props: CardButtonProps) {
    return (
        <div className={`flex flex-col justify-center items-center w-[200px] h-[200px] bg-gradient-to-br from-[#311B92] to-[#673AB7] text-white rounded-md p-[20px] my-[15px] mx-[10px] shadow-md `}>
            <h2 className="mx-[10px] text-lg">{props.valor}</h2>
            <div className="flex flex-row justify-around mt-[20px]">
                <button className="bg-[#1976D2] p-[10px] mr-[10px] rounded-md w-[40px] h-[40px] text-center" onClick={()=>props.decrease(props.valor, props.func)}>-</button>
                <button className="bg-[#1976D2] p-[10px] text-lg ml-[10px] rounded-md w-[40px] h-[40px] text-center" onClick={() => props.increase(props.valor, props.func)}>+</button>
            </div>
        </div>
    )
}