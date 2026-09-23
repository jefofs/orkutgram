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
    const [dialogOpen, setDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 
    
    function addUser(){
        const newUser = {
            id: users.length + 1,
            name,
            email,
        }
        setUsers((currentUsers) => [...currentUsers, newUser,])
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
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="cursor-pointer" onClick={() => setDialogOpen(true)}>
                            Adicionar usuário
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Adicionar usuário</DialogTitle>
                        </DialogHeader>
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