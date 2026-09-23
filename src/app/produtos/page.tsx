"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react";

const productsMock = [
    {
        id: 1,
        name: "mouse",
        price: 50
    },
    {
        id: 2,
        name: "teclado",
        price: 120
    }
]

export default function Home(){
    const [product, setProduct] = useState(productsMock);
    return(
        <main className="p-6">
            <div className="flex justify-between items-center">
                <div className="mb-6">
                    <h1>Produtos</h1>
                    <p>
                        Gerencie os produtos cadastrados
                    </p>
                </div>
                <Button className="cursor-pointer">Adicionar produto</Button>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Nome</TableHead>
                        <TableHead>Preço</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {product.map(product => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <Button className="cursor-pointer" variant='secondary'>Editar</Button>
                                <Button className="cursor-pointer" variant='destructive'>Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    )
}