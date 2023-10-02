import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Card } from '@/components/card'
import Link from 'next/link'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Header />
    // <div className="flex justify-centre items-center">
    //   <nav>
    //     <Link href={"/produtos/produtos"}>
    //       <p>Produtos</p>
    //     </Link>
    //   </nav>
      
    // </div>
  )
}
