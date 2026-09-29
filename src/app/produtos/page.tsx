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
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
    const [products, setProducts] = useState(productsMock);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    
    function addProduct(){
        const newProduct = {
            id: Math.max(...products.map(product => product.id)) + 1,
            name,
            price: Number(price),
        }
        setProducts((currentProducts) => [...currentProducts, newProduct]);
        clearFields();
        setDialogOpen(false);
    }

    function deleteProduct(id: number){
        setProducts(currentProducts => 
            currentProducts.filter(product => product.id !== id)
        );
    }

    function clearFields(){
        setName("");
        setPrice("");
    }

    return(
        <main className="p-6">
            <div className="flex justify-between items-center">
                <div className="mb-6">
                    <h1>Produtos</h1>
                    <p>
                        Gerencie os produtos cadastrados
                    </p>
                </div>
                <Dialog
                    open={dialogOpen}
                    onOpenChange={(open) => {
                        setDialogOpen(open);
                        if(!open){
                            clearFields()
                        }
                    }}
                >
                    <DialogTrigger render={<Button className="cursor-pointer"/>}>
                        Adicionar Produto
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            Informações do produto
                        </DialogHeader>

                        <div>
                            <div>
                                <Label>Nome</Label>
                                <Input
                                    id="name"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                            <div>
                                <Label>Preço</Label>
                                <Input
                                    id="price"
                                    value={price}
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                            <Button className="cursor-pointer" onClick={addProduct}>
                                Adicionar produto
                            </Button>
                        </div>
                    </DialogContent>

                </Dialog>
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
                    {products.map(product => (
                        <TableRow key={product.id}>
                            <TableCell>{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>
                                <Button className="cursor-pointer" variant='secondary'>Editar</Button>
                                <Dialog>
                                    <DialogTrigger render={<Button className="cursor-pointer" variant='destructive'/>}>
                                        Excluir
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            Tem certeza de que deseja excluir esse usuário?
                                        </DialogHeader>

                                        <Button className="cursor-pointer" onClick={()=> deleteProduct(product.id)}>Sim</Button>
                                        <Button className="cursor-pointer">Não</Button>
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </main>
    )
}