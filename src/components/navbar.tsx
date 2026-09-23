'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar(){
    const pathname = usePathname();
    return(
        <nav>
            <div>
                <Link href="/">
                    Orkutgram
                </Link>

                <div className="flex gap-4">
                    <Link 
                        href="/"
                        className={`${
                            pathname === "/" 
                            ? "bg-muted" 
                            : "hover:bg-muted"}`}
                    >
                        Usuários
                    </Link>
                    <Link 
                        href="/produtos" 
                        className={`${
                            pathname === "/produtos"
                            ? 'bg-muted'
                            : 'hover:bg-muted'
                        }`}>Produtos</Link>
                </div>
            </div>
        </nav>
    )
}