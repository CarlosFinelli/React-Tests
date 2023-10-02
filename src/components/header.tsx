import Link from "next/link"

export default function Header() {
    return(
        <div className="flex justify-start items-start bg-gradient-to-r from-purple-800 to-green-600 text-white px-[20px] w-full p-[10px]">
            <Link href={"/"}>
                <p>Home</p>
            </Link>
            <Link href={"/produtos/produtos"} className="ml-[20px]">
                <p>Produtos</p>
            </Link>
            <Link href={"/calculos/calculos"} className="ml-[20px]">
                <p>Cálculos</p>
            </Link>
        </div>
    )
}