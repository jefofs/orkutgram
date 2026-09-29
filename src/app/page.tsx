"use client"

import { Button } from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const userMock = [
    {
        id: 1,
        name: "joão",
        email: "joao123@gmail.com"
    },
    {
        id: 2,
        name: "beatriz",
        email: "beatriz123@gmail.com"
    }
]

export default function Home(){
    const [users, setUsers] = useState(userMock);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);
    
    function addUser(){
        const newUser = {
            id: users.length + 1,
            name,
            email,
        }
        setUsers((currentUsers) => [...currentUsers, newUser,]);
        clearFields();
        setDialogOpen(false);
    }

    function clearFields(){
        setName("");
        setEmail("");
    }
    
    return(
        <main className="p-6">
            <div className="flex justify-between items-center">
                <div className="mb-6">
                    <h1>Usuários</h1>
                    <p>
                        Gerencie os usuários cadastrados
                    </p>
                </div>
                <Dialog
                    open={dialogOpen}
                    onOpenChange={(open) => {
                        setDialogOpen(open);
                        if(!open){
                            clearFields();
                        }
                    }}
                >
                    <DialogTrigger render={<Button className="cursor-pointer"/>}> 
                        Adicionar usuário
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Informações do usuário</DialogTitle>
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
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}    
                                    />
                            </div>
                            <Button className="cursor-pointer" onClick={addUser}>
                                Adicionar
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
                        <TableHead>E-mail</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
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